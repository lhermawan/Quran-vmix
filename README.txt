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


REMOTE SYNC MODE (RECOMMENDED FOR VMIX BROWSER INPUT)

Jika control dan overlay tidak sinkron (karena engine browser berbeda), gunakan sync server:

1) Jalankan sync server (butuh Node.js):
   node sync-server.js

2) Di control.html isi field "Sync Server URL":
   http://IP_SERVER:8787/state

3) Di overlay vMix gunakan URL:
   overlay.html?sync=http://IP_SERVER:8787/state

Dengan mode ini, control akan POST state ke server dan overlay polling GET /state.

