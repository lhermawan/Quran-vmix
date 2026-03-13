QURAN LIVE STREAM SYSTEM (vMix Ready)

FILES

overlay.html
Live subtitle ayat (Arabic + translation), smooth animation, and optional auto-play mode.

control.html
Operator panel to control surah/ayah, jump by juz, and start/stop auto-play.

mushaf.html
Display mushaf page from CDN.

SETUP IN VMIX

1) Add Browser Input:
   load overlay.html

2) Add Browser Input:
   load mushaf.html?p=1

3) Open control.html in browser (operator laptop/PC)

Operator controls:
- Change surah / ayah
- Next / prev ayah (also Arrow Left/Right)
- Jump directly to Juz
- Auto play ayat with interval per second

NOTES

- overlay and control are synced without page reload using localStorage + BroadcastChannel.
- API source: api.quran.com
- You can still force opening specific verse with query:
  overlay.html?s=2&a=5

Recommended layout:

Camera (left)
Mushaf (right)
Overlay ayat bottom
