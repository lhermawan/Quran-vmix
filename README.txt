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
- Control otomatis kirim state ke endpoint hidden: http://157.10.157.25:8787/state
- Overlay juga auto tarik state dari endpoint yang sama untuk sinkron lintas mesin/browser vMix.
- Untuk sinkron realtime paling stabil, buka control dan overlay dari host/domain yang sama (contoh sama-sama di mesin vMix: localhost/quran).
- API source utama: https://equran.id/api/v2/surat/{nomor}
- Bisa force verse dari URL:
  overlay.html?s=2&a=5
- Jika di Browser vMix muncul "Periksa koneksi internet":
  1) cek mesin vMix bisa akses internet/DNS
  2) coba endpoint override:
     overlay.html?api=http://equran.id/api/v2/surat&s=1&a=1
  3) pastikan firewall/proxy mengizinkan domain equran.id

Recommended layout:
Camera (left)
Mushaf (right)
Overlay ayat (bottom)
