# -*- coding: utf-8 -*-
"""Normaliza fotos de hoteles: 16:10, lavado calido sutil para armonizar."""
from PIL import Image, ImageEnhance
import os

HERE = "C:/Users/aleja/boda-laura-y-jorge/public/hoteles"
TW, TH = 720, 450  # 16:10

def norm(src, out):
    img = Image.open(os.path.join(HERE, src)).convert("RGB")
    # cover-crop a 16:10
    w, h = img.size
    tr = TW / TH
    if w / h > tr:
        nw = int(h * tr); img = img.crop(((w-nw)//2, 0, (w-nw)//2+nw, h))
    else:
        nh = int(w / tr); img = img.crop((0, (h-nh)//2, w, (h-nh)//2+nh))
    img = img.resize((TW, TH), Image.LANCZOS)
    # lavado calido sutil
    img = ImageEnhance.Color(img).enhance(0.88)
    warm = Image.new("RGB", img.size, (245, 240, 231))
    img = Image.blend(img, warm, 0.08)
    img.save(os.path.join(HERE, out), "JPEG", quality=82, optimize=True)
    print(f"  {out} {os.path.getsize(os.path.join(HERE,out))//1024}KB")

# Curados: fachadas + habitaciones limpias (sin banners con texto)
pairs = [
    ("comfort-3.jpg", "h-comfort-1.jpg"),   # fachada comfort
    ("comfort-1.jpg", "h-comfort-2.jpg"),   # habitacion
    ("comfort-2.jpg", "h-comfort-3.jpg"),
    ("downtown-2.jpg", "h-downtown-1.jpg"), # fachada downtown
    ("downtown-3.jpg", "h-downtown-2.jpg"),
    ("downtown-4.jpg", "h-downtown-3.jpg"),
]
for s, o in pairs:
    try: norm(s, o)
    except Exception as e: print(f"  skip {s}: {e}")
print("Listo.")
