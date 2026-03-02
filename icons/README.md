# ReasonDx Icons

Place the following icon files here for PWA support:

- `apple-touch-icon.png` — 180x180 PNG
- `icon-192.png` — 192x192 PNG (for manifest.json)
- `icon-512.png` — 512x512 PNG (for manifest.json)

These can be generated from `favicon.svg` using:
```bash
# Requires ImageMagick
convert -background "#2874A6" -resize 180x180 ../favicon.svg apple-touch-icon.png
convert -background "#2874A6" -resize 192x192 ../favicon.svg icon-192.png
convert -background "#2874A6" -resize 512x512 ../favicon.svg icon-512.png
```
