# -*- coding: utf-8 -*-
"""Texturas terracota y beige para variedad de cards."""
from PIL import Image, ImageOps, ImageEnhance
import os
OUT = "C:/Users/aleja/boda-laura-y-jorge/public"

def hx(h):
    h=h.lstrip("#"); return tuple(int(h[i:i+2],16) for i in (0,2,4))

def duotone(gray, shadow, mid, light):
    lr,lg,lb=[],[],[]
    for i in range(256):
        if i<128:
            t=i/128.0
            r=shadow[0]+(mid[0]-shadow[0])*t; g=shadow[1]+(mid[1]-shadow[1])*t; b=shadow[2]+(mid[2]-shadow[2])*t
        else:
            t=(i-128)/127.0
            r=mid[0]+(light[0]-mid[0])*t; g=mid[1]+(light[1]-mid[1])*t; b=mid[2]+(light[2]-mid[2])*t
        lr.append(int(r)); lg.append(int(g)); lb.append(int(b))
    return gray.point(lr), gray.point(lg), gray.point(lb)

def tint(src,out,shadow,mid,light,contrast=1.0,size=(1400,1980)):
    img=Image.open(src).convert("L")
    if contrast!=1.0: img=ImageEnhance.Contrast(img).enhance(contrast)
    img=ImageOps.autocontrast(img,cutoff=1)
    r,g,b=duotone(img,shadow,mid,light)
    o=Image.merge("RGB",(r,g,b)).resize(size,Image.LANCZOS)
    o.save(os.path.join(OUT,out),"JPEG",quality=88,optimize=True)
    print(f"  {out} {o.size} {os.path.getsize(os.path.join(OUT,out))//1024}KB")

# Terracota (#b85b3f) - base pergamino con arrugas
tint("tex1-parchment.jpg","paper-terracotta.jpg",
     shadow=hx("8f4630"), mid=hx("b85b3f"), light=hx("cd7a5e"), contrast=1.0)
# Beige (#d9ccb3) - base fibras
tint("tex2-beige.jpg","paper-beige.jpg",
     shadow=hx("c3b493"), mid=hx("d9ccb3"), light=hx("e8dfca"), contrast=1.0)
print("Listo.")
