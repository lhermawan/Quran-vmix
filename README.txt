QURAN LIVE STREAM SYSTEM (vMix Ready)

FILES

overlay.html
Live subtitle ayat pakai API equran.id (Arab + Indonesia), support auto-play timer/audio.

control.html
Operator panel untuk kontrol surah/ayah, jump juz, pilih qori, dan auto-play mode.

mushaf.html
Display mushaf page from CDN.

SETUP IN VMIX

1) Add Browser Input:
   load overlay.html

2) Add Browser Input:
   load mushaf.html?p=1

3) Open control.html di browser operator

Operator controls:
- Change surah / ayah
- Next / prev ayah (Arrow Left/Right)
- Next otomatis valid ke nomorAyat berikutnya; jika akhir surat pindah ke surat selanjutnya
- Jump to Juz
- Auto play: mode Timer (detik) atau mode Audio selesai
- Pilih qori (01-06 dari API equran)

NOTES

- overlay dan control sinkron realtime via localStorage + BroadcastChannel.
- API source utama: https://equran.id/api/v2/surat/{nomor}
- Bisa force verse dari URL:
  overlay.html?s=2&a=5

Recommended layout:
Camera (left)
Mushaf (right)
Overlay ayat (bottom)
