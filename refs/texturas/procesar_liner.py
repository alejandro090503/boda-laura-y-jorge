# -*- coding: utf-8 -*-
"""Procesa el liner botanico real a la paleta calida de la boda."""
from PIL import Image, ImageEnhance, ImageOps
import os

OUT = "C:/Users/aleja/boda-laura-y-jorge/public"

# Liner botanico chintz (antiguo textil siglo XVIII) - fondo crema, vides verdes, flores terracota
src = Image.open("liner-a.jpg").convert("RGB")

# 1. Armonizar a la paleta: bajar saturacion levemente, calidez hacia crema
img = ImageEnhance.Color(src).enhance(0.82)      # menos saturado, mas editorial
img = ImageEnhance.Contrast(img).enhance(0.96)
img = ImageEnhance.Brightness(img).enhance(1.03)

# 2. Overlay calido crema muy sutil para unificar con #f5f0e7
warm = Image.new("RGB", img.size, (245, 240, 231))
img = Image.blend(img, warm, 0.12)

# liner completo (para el interior del sobre en el hero)
full = img.resize((1000, int(1000 * img.height / img.width)), Image.LANCZOS)
full.save(os.path.join(OUT, "envelope-liner.jpg"), "JPEG", quality=88, optimize=True)
print(f"  envelope-liner.jpg  {full.size}  {os.path.getsize(os.path.join(OUT,'envelope-liner.jpg'))//1024}KB")

# banda superior densa para la solapa triangular del sobre
w, h = img.size
band = img.crop((0, int(h*0.02), w, int(h*0.42)))
band = band.resize((900, int(900 * band.height / band.width)), Image.LANCZOS)
band.save(os.path.join(OUT, "liner-band.jpg"), "JPEG", quality=88, optimize=True)
print(f"  liner-band.jpg  {band.size}  {os.path.getsize(os.path.join(OUT,'liner-band.jpg'))//1024}KB")
print("Listo.")
