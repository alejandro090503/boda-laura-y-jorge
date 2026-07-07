# Prompts para generar assets — Boda Laura y Jorge

Genera cada asset en la herramienta AI de tu preferencia (Midjourney, DALL-E, Gemini Imagen, Ideogram, Leonardo AI, Banana desktop, etc.) y guárdalo en esta misma carpeta (`C:/Users/aleja/boda-laura-y-jorge/refs/`) con el **nombre de archivo indicado**. La sesión de producción los leerá de acá.

**Paleta de la boda** (referirla si el modelo lo permite):
```
Crema        #f5f0e7
Olivo        #56644a
Café oscuro  #3b3028
Terracota    #b85b3f
Verde oliva  #707b58
Dorado suave #b08d57
Beige        #d9ccb3
```

---

## 1. Sobre cerrado (hero de la invitación)

**Archivo destino:** `envelope-front.png` · **Aspect ratio:** 4:3 · **Dimensiones:** 780×560 · **Fondo:** transparente

```
Elegant wedding envelope, top-down flat overhead view, envelope in solid olive green color (hex #56644a), matte finish, deckle edge on the flap, natural cotton paper texture, subtle letterpress texture, flap fully closed, no wax seal, no text, no monogram, soft realistic shadow underneath, isolated on transparent background, photorealistic, editorial wedding photography, high resolution 4K, uniform natural light, no other objects
```

---

## 2. Forro interior del sobre (se revela al abrir)

**Archivo destino:** `envelope-liner.png` · **Aspect ratio:** 4:3 · **Dimensiones:** 780×560 · **Fondo:** cubre todo el patrón

```
Vintage botanical envelope liner pattern, flat rectangular composition, terracotta magnolias, cream white magnolia blossoms, olive branches with silvery leaves, sage green foliage, dried grasses, wheat, warm cream ivory background (hex #f5f0e7), seamless botanical illustration, watercolor + gouache painting style, 19th century natural history illustration aesthetic, no text, no borders, no letters, high resolution 4K
```

---

## 3. Sello de cera con monograma "L&J" (intacto)

**Archivo destino:** `wax-seal-lj.png` · **Aspect ratio:** 1:1 · **Dimensiones:** 600×600 · **Fondo:** transparente

```
Realistic wax seal stamp, circular shape, intertwined monogram letters "L" and "J" in ornate serif calligraphy, wax color muted antique gold (hex #b08d57), slightly warm copper undertone, uneven natural edges, subtle drip, thin natural texture, tiny cracks, soft realistic shadow directly beneath, top-down macro photography view, isolated on transparent background, professional product photography, high resolution 4K
```

---

## 4. Sello de cera roto (para la animación de apertura del sobre)

**Archivo destino:** `wax-seal-broken.png` · **Aspect ratio:** 1:1 · **Dimensiones:** 600×600 · **Fondo:** transparente

```
Wax seal broken into 2 or 3 uneven natural pieces, cracks visible, wax color muted antique gold (hex #b08d57), realistic split, no shadow, top-down macro view, isolated on transparent background, photorealistic
```

---

## 5. Textura de papel linen (fondo de las tarjetas)

**Archivo destino:** `paper-linen.jpg` · **Aspect ratio:** 4:5 · **Dimensiones:** 1600×2000 · **Fondo:** N/A (es el fondo)

```
Textured linen paper background, cream ivory color (hex #f5f0e7), subtle woven fibers visible, natural cotton texture, no shadows, no borders, seamless tileable texture, uniform lighting, professional scan quality, high resolution, no objects
```

---

## 6. Ilustración de la Hacienda Santa Cecilia (línea a mano)

**Archivo destino:** `hacienda-illustration.png` · **Aspect ratio:** 3:2 · **Dimensiones:** 1200×800 · **Fondo:** transparente

**Paso 1 (opcional pero recomendado):** Busca en Google Images `"Hacienda Santa Cecilia Delicias Chihuahua"` y descarga 2-3 fotos de la fachada. Adjúntalas como referencia visual al modelo AI si permite image-to-image.

**Prompt con referencias:**

```
Hand-drawn architectural line illustration of Hacienda Santa Cecilia in Delicias, Chihuahua, Mexico, based on the reference photos provided, minimalist ink drawing, thin uniform stroke width 1.5px, sepia brown color (hex #3b3028), no shading, no color fill, no hatching, focus on facade, arches, cupula and central courtyard, editorial botanical illustration style, isolated on transparent background, wedding invitation aesthetic, high resolution 4K
```

**Prompt de fallback (sin fotos de la hacienda real):**

```
Hand-drawn architectural line illustration of a colonial Mexican hacienda, single-story white stucco building with red-tile roof, arched entrance, small bell tower, courtyard with a fountain, olive trees at sides, minimal ink drawing, thin uniform stroke sepia brown (hex #3b3028), no shading, isolated on transparent background, editorial botanical illustration style
```

---

## 7. Hoja de magnolia — 3 variantes

**Archivos:** `magnolia-1.png` · `magnolia-2.png` · `magnolia-3.png` · **Aspect ratio:** 1:1 · **Dimensiones:** 800×800 · **Fondo:** transparente

Regenera 3 veces cambiando ángulo/composición.

```
Single magnolia leaf branch photograph, glossy dark green top with warm brown copper underside, 2-3 leaves on branch, natural specimen, isolated on transparent background, no shadow, editorial botanical photography, top-down view, high resolution 4K
```

---

## 8. Rama de olivo — 3 variantes

**Archivos:** `olive-1.png` · `olive-2.png` · `olive-3.png` · **Aspect ratio:** 1:1 · **Dimensiones:** 800×800 · **Fondo:** transparente

Regenera 3 veces cambiando ángulo/composición.

```
Single olive tree branch, silvery green narrow leaves, small olive fruit optional, natural specimen photograph, isolated on transparent background, no shadow, editorial botanical style, top-down view, high resolution 4K
```

---

## 9. Ribbon de terciopelo olivo

**Archivo destino:** `ribbon-olive.png` · **Aspect ratio:** 4:1 · **Dimensiones:** 1600×400 · **Fondo:** transparente

```
Olive green velvet ribbon, horizontal composition, natural soft fold visible in the middle, velvet fabric texture, subtle sheen, isolated on transparent background, luxurious wedding invitation ribbon, editorial product photography, high resolution 4K
```

---

## 10. Open Graph image (preview al compartir por WhatsApp)

**Archivo destino:** `opengraph-image.jpg` · **Aspect ratio:** 1.91:1 · **Dimensiones:** 1200×630 · **Fondo:** cream linen

```
Wedding invitation Open Graph image, cream linen paper background (hex #f5f0e7), centered elegant script text "Laura y Jorge" in olive dark ink (hex #56644a), "15 de Agosto 2026" below in serif capitals (hex #3b3028), decorative olive branch bottom left, magnolia leaves top right, wax seal L&J center bottom in antique gold (hex #b08d57), editorial wedding style
```

---

## Checklist final

Cuando termines de generar, deberías tener estos archivos en `refs/`:

- [ ] `envelope-front.png`
- [ ] `envelope-liner.png`
- [ ] `wax-seal-lj.png`
- [ ] `wax-seal-broken.png`
- [ ] `paper-linen.jpg`
- [ ] `hacienda-illustration.png`
- [ ] `magnolia-1.png` `magnolia-2.png` `magnolia-3.png`
- [ ] `olive-1.png` `olive-2.png` `olive-3.png`
- [ ] `ribbon-olive.png`
- [ ] `opengraph-image.jpg`

**16 archivos en total.**

---

## Optimización post-generación (opcional pero recomendado)

Cuando los generes, todos vendrán a 4K. Para que no pesen kilos, corrélos por `cwebp` o `sharp` para bajarlos a WebP <150KB manteniendo alfa:

```bash
cd C:/Users/aleja/boda-laura-y-jorge/refs
# Para PNGs con transparencia:
for f in *.png; do cwebp -q 82 -alpha_q 90 "$f" -o "${f%.png}.webp"; done
# Para el JPG (paper-linen y og-image):
for f in *.jpg; do cwebp -q 85 "$f" -o "${f%.jpg}.webp"; done
```

La sesión de producción usará los `.webp` si existen; si no, cae en `.png`/`.jpg`.
