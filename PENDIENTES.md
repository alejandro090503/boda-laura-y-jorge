# Assets pendientes — Boda Laura y Jorge

El sitio está funcional con fallbacks CSS/SVG, pero necesita estos assets generados con AI para el resultado editorial final.

## Bloqueantes (requeridos para calidad final)

Los prompts están en [`refs/PROMPTS.md`](refs/PROMPTS.md).

- [ ] `envelope-front.png` — sobre olivo cerrado (actualmente es CSS puro)
- [ ] `envelope-liner.png` — forro floral vintage (actualmente gradientes CSS)
- [ ] `wax-seal-lj.png` — sello de cera L&J dorado (actualmente círculo CSS)
- [ ] `paper-linen.jpg` — textura papel crema (actualmente CSS repeating-gradient)

## Deseables

- [ ] `wax-seal-broken.png` — sello roto (fallback: el mismo sello con rotate+fade)
- [ ] `hacienda-illustration.png` — ilustración hacienda real (hay SVG genérico funcional)
- [ ] `magnolia-1.png`, `magnolia-2.png`, `magnolia-3.png` — decoración
- [ ] `olive-1.png`, `olive-2.png`, `olive-3.png` — decoración
- [ ] `ribbon-olive.png` — ribbon de terciopelo

## Para OG / WhatsApp

- [ ] `opengraph-image.jpg` — preview al compartir (1200×630)

## Música

- [ ] Descargar y comprimir la canción del cliente
  ```bash
  yt-dlp -x --audio-format mp3 -o "cancion-original.%(ext)s" "https://www.youtube.com/watch?v=B4U8C-3Hc64"
  ffmpeg -i cancion-original.mp3 -ac 1 -b:a 64k -vn cancion.mp3
  ```
  Subir a Supabase Storage: `fotos-clientes/audio/boda-laura-y-jorge/cancion.mp3`

## Instrucciones

1. Genera cada asset con los prompts de `refs/PROMPTS.md`
2. Guárdalos en `public/` con el nombre indicado
3. El sitio los tomará automáticamente (los componentes ya los referencian)
4. Re-deploy con `npx vercel --prod --yes`
