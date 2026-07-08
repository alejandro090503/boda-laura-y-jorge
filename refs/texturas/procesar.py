# -*- coding: utf-8 -*-
"""Tinta texturas reales de papel a la paleta de la boda, manteniendo la textura."""
from PIL import Image, ImageOps, ImageEnhance
import os

OUT = "C:/Users/aleja/boda-laura-y-jorge/public"
os.makedirs(OUT, exist_ok=True)

def hx(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

# Paleta
CREAM    = hx("f5f0e7")
BEIGE    = hx("d9ccb3")
OLIVE    = hx("56644a")
OLIVE_D  = hx("3d4735")
INK      = hx("3b3028")

def duotone(gray, shadow, mid, light):
    """Mapea gris -> duotono de 3 puntos (0, 128, 255)."""
    # construye LUT interpolando shadow->mid->light
    lut_r, lut_g, lut_b = [], [], []
    for i in range(256):
        if i < 128:
            t = i / 128.0
            r = shadow[0] + (mid[0]-shadow[0])*t
            g = shadow[1] + (mid[1]-shadow[1])*t
            b = shadow[2] + (mid[2]-shadow[2])*t
        else:
            t = (i-128) / 127.0
            r = mid[0] + (light[0]-mid[0])*t
            g = mid[1] + (light[1]-mid[1])*t
            b = mid[2] + (light[2]-mid[2])*t
        lut_r.append(int(r)); lut_g.append(int(g)); lut_b.append(int(b))
    return gray.point(lut_r*1), gray.point(lut_g), gray.point(lut_b)

def tint(src, out_name, shadow, mid, light, contrast=1.0, size=None):
    img = Image.open(src).convert("L")
    if contrast != 1.0:
        img = ImageEnhance.Contrast(img).enhance(contrast)
    # normaliza histograma suavemente
    img = ImageOps.autocontrast(img, cutoff=1)
    r, g, b = duotone(img, shadow, mid, light)
    out = Image.merge("RGB", (r, g, b))
    if size:
        out = out.resize(size, Image.LANCZOS)
    path = os.path.join(OUT, out_name)
    out.save(path, "JPEG", quality=88, optimize=True)
    print(f"  {out_name}  {out.size}  {os.path.getsize(path)//1024}KB")

print("Generando texturas tintadas...")

# 1. Fondo principal de las cards — crema limpio (base: acuarela tex3)
tint("tex3-white.jpg", "paper-linen.jpg",
     shadow=BEIGE, mid=CREAM, light=hx("fbf7f0"),
     contrast=0.85, size=(1400, 1980))

# 2. Papel envejecido — para hero / detalles (base: pergamino tex1)
tint("tex1-parchment.jpg", "paper-aged.jpg",
     shadow=hx("c9b896"), mid=hx("ede4d2"), light=hx("f7f1e6"),
     contrast=0.95, size=(1400, 1980))

# 3. Fibras visibles cálidas (base: fibras tex2)
tint("tex2-beige.jpg", "paper-fiber.jpg",
     shadow=hx("cdbfa2"), mid=hx("e8ddc8"), light=hx("f4eee2"),
     contrast=1.0, size=(1400, 1980))

# 4. Papel olivo (para las cards oscuras)
tint("tex3-white.jpg", "paper-olive.jpg",
     shadow=OLIVE_D, mid=OLIVE, light=hx("67765a"),
     contrast=1.05, size=(1400, 1980))

print("Listo.")
