# -*- coding: utf-8 -*-
"""Extrae sprigs botanicos del liner con fondo transparente para decorar cards."""
from PIL import Image
import os

OUT = "C:/Users/aleja/boda-laura-y-jorge/public"
src = Image.open("liner-a.jpg").convert("RGB")
W, H = src.size  # 1600 x 2559

def knockout(crop):
    """Hace transparente el fondo crema; deja opacas hojas/flores."""
    crop = crop.convert("RGBA")
    px = crop.load()
    w, h = crop.size
    # color de fondo crema aproximado
    bg = (226, 218, 201)
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            # distancia al fondo
            d = ((r-bg[0])**2 + (g-bg[1])**2 + (b-bg[2])**2) ** 0.5
            if d < 32:
                a = 0
            elif d < 70:
                a = int((d - 32) / 38 * 255)
            else:
                a = 255
            px[x, y] = (r, g, b, a)
    return crop

# Region 1: spray floral esquina superior izquierda
r1 = src.crop((40, 60, 720, 760))
k1 = knockout(r1)
k1.thumbnail((520, 520), Image.LANCZOS)
k1.save(os.path.join(OUT, "sprig-1.png"))
print(f"  sprig-1.png {k1.size}")

# Region 2: rama con flores lado derecho
r2 = src.crop((950, 480, 1580, 1180))
k2 = knockout(r2)
k2.thumbnail((520, 520), Image.LANCZOS)
k2.save(os.path.join(OUT, "sprig-2.png"))
print(f"  sprig-2.png {k2.size}")

# Region 3: ramillete pequeno inferior
r3 = src.crop((80, 1600, 620, 2180))
k3 = knockout(r3)
k3.thumbnail((480, 480), Image.LANCZOS)
k3.save(os.path.join(OUT, "sprig-3.png"))
print(f"  sprig-3.png {k3.size}")

print("Listo.")
