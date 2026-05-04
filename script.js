/* =============================================
   TRY OUT MATEMATIKA — KELAS 6 SD
   script.js
   40 PG + 15 Isian — Semua Materi Kelas 6
   ============================================= */

// ═══════════════════════════════════════════
// 1. NAVIGASI
// ═══════════════════════════════════════════
function goTab(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// ═══════════════════════════════════════════
// 2. DATA — 40 SOAL PG
//    Topik: Bilangan, Operasi Hitung, Pecahan,
//    FPB/KPK, Perbandingan, Skala, Geometri,
//    Bangun Ruang, Luas/Keliling, Statistik,
//    Peluang, Koordinat, Jarak Terpendek
// ═══════════════════════════════════════════
const pgData = [

  /* ══════ A. BILANGAN & OPERASI HITUNG ══════ */
  {
    no:1, cat:'Bilangan', cc:'b-blue',
    q: 'Nilai dari 4.500 − 36 × 75 + 1.800 ÷ 12 adalah ...',
    opts: ['1.750', '1.950', '2.100', '2.250'],
    ans: 1,
    why: 'Kerjakan kali dan bagi dulu (kiri ke kanan):\n• 36 × 75 = 2.700\n• 1.800 ÷ 12 = 150\nLalu: 4.500 − 2.700 + 150 = 1.800 + 150 = 1.950'
  },
  {
    no:2, cat:'Bilangan', cc:'b-blue',
    q: 'Sebuah pabrik memproduksi 3.456 produk per hari. Dalam 5 hari produksi, terdapat 248 produk cacat yang dibuang. Banyak produk yang lolos quality control adalah ...',
    opts: ['16.832', '17.032', '17.280', '17.528'],
    ans: 1,
    why: 'Total produksi = 3.456 × 5 = 17.280\nProduk lolos = 17.280 − 248 = 17.032'
  },
  {
    no:3, cat:'Bilangan', cc:'b-blue',
    q: 'Pak Hendra memiliki uang Rp850.000. Ia membeli 3 buku @Rp45.000, 4 pensil @Rp7.500, dan 2 penggaris @Rp12.500. Sisa uang Pak Hendra adalah ...',
    opts: ['Rp595.000', 'Rp620.000', 'Rp660.000', 'Rp730.000'],
    ans: 2,
    why: 'Buku: 3 × 45.000 = 135.000\nPensil: 4 × 7.500 = 30.000\nPenggaris: 2 × 12.500 = 25.000\nTotal belanja = 135.000 + 30.000 + 25.000 = 190.000\nSisa = 850.000 − 190.000 = 660.000'
  },
  {
    no:4, cat:'Bilangan', cc:'b-blue',
    q: 'Hasil dari (−15) × 4 + 120 ÷ (−6) − (−35) adalah ...',
    opts: ['−85', '−45', '−25', '−5'],
    ans: 1,
    why: 'Kerjakan kali dan bagi dulu:\n• (−15) × 4 = −60\n• 120 ÷ (−6) = −20\n• −(−35) = +35\nLalu: −60 + (−20) + 35 = −80 + 35 = −45'
  },
  {
    no:5, cat:'Bilangan', cc:'b-blue',
    q: 'Suhu awal ruangan 22°C. AC menyala dan suhu turun 3°C setiap jam. Setelah 9 jam, suhu ruangan menjadi ... °C.',
    opts: ['−7', '−5', '−3', '−1'],
    ans: 1,
    why: 'Penurunan suhu = 3 × 9 = 27°C\nSuhu akhir = 22 − 27 = −5°C'
  },

  /* ══════ B. FPB DAN KPK ══════ */
  {
    no:6, cat:'FPB & KPK', cc:'b-purple',
    q: 'FPB dari 48 dan 72 adalah ...',
    opts: ['12', '24', '36', '48'],
    ans: 1,
    why: '48 = 2⁴ × 3. 72 = 2³ × 3². FPB = 2³ × 3 = 8 × 3 = 24'
  },
  {
    no:7, cat:'FPB & KPK', cc:'b-purple',
    q: 'KPK dari 12, 18, dan 24 adalah ...',
    opts: ['36', '48', '72', '144'],
    ans: 2,
    why: '12 = 2² × 3. 18 = 2 × 3². 24 = 2³ × 3. KPK = 2³ × 3² = 8 × 9 = 72'
  },
  {
    no:8, cat:'FPB & KPK', cc:'b-purple',
    q: 'Dua lampu berkedip bersamaan. Lampu A berkedip setiap 4 detik, Lampu B setiap 6 detik. Keduanya akan berkedip bersamaan lagi setelah ... detik.',
    opts: ['10', '12', '18', '24'],
    ans: 1,
    why: 'KPK dari 4 dan 6 = 12. Jadi lampu berkedip bersamaan setiap 12 detik.'
  },
  {
    no:9, cat:'FPB & KPK', cc:'b-purple',
    q: 'Pak Ali memiliki 36 mangga dan 48 jeruk. Ia ingin membagi buah-buahan tersebut ke dalam keranjang dengan jumlah yang sama. Berapa keranjang yang dibutuhkan?',
    opts: ['6', '12', '18', '24'],
    ans: 1,
    why: 'FPB dari 36 dan 48 = 12. Jadi dibutuhkan 12 keranjang, tiap keranjang berisi 3 mangga dan 4 jeruk.'
  },

  /* ══════ C. PECAHAN ══════ */
  {
    no:10, cat:'Pecahan', cc:'b-green',
    q: 'Hasil dari ²⁄₃ + ³⁄₄ − ¹⁄₆ adalah ...',
    opts: ['⁵⁄₄', '¹⁰⁄₁₂', '¹⁵⁄₁₂', '⁵⁄₆'],
    ans: 2,
    why: 'KPK dari 3, 4, 6 = 12. ²⁄₃ = ⁸⁄₁₂, ³⁄₄ = ⁹⁄₁₂, ¹⁄₆ = ²⁄₁₂. Hasil: (8+9−2)/12 = 15/12 = 1¼'
  },
  {
    no:11, cat:'Pecahan', cc:'b-green',
    q: 'Hasil dari 2½ × 1⅓ adalah ...',
    opts: ['3⅓', '3⅔', '3½', '4'],
    ans: 0,
    why: '2½ = 5/2. 1⅓ = 4/3. Hasil = (5/2) × (4/3) = 20/6 = 10/3 = 3⅓'
  },
  {
    no:12, cat:'Pecahan', cc:'b-green',
    q: 'Hasil dari 3¾ ÷ 1½ adalah ...',
    opts: ['2', '2¼', '2½', '3'],
    ans: 2,
    why: '3¾ = 15/4. 1½ = 3/2. Pembagian pecahan: 15/4 ÷ 3/2 = 15/4 × 2/3 = 30/12 = 5/2 = 2½'
  },
  {
    no:13, cat:'Pecahan', cc:'b-green',
    q: 'Ibu membeli ³⁄₄ kg gula. Dipakai ¹⁄₃ kg untuk membuat kue. Sisa gula adalah ...',
    opts: ['5/12 kg', '7/12 kg', '1/2 kg', '1/4 kg'],
    ans: 0,
    why: '³⁄₄ − ¹⁄₃. KPK 4 dan 3 = 12. 9/12 − 4/12 = 5/12 kg'
  },
  {
    no:14, cat:'Pecahan', cc:'b-green',
    q: 'Urutan pecahan dari terkecil ke terbesar: 0,75 ; ³⁄₅ ; ⁷⁄₁₀ ; 65% adalah ...',
    opts: [
      '0,75 ; ⁷⁄₁₀ ; 65% ; ³⁄₅',
      '³⁄₅ ; 65% ; ⁷⁄₁₀ ; 0,75',
      '65% ; ³⁄₅ ; ⁷⁄₁₀ ; 0,75',
      '³⁄₅ ; 0,75 ; 65% ; ⁷⁄₁₀'
    ],
    ans: 1,
    why: 'Ubah ke desimal: 0,75 = 0,75; ³⁄₅ = 0,60; ⁷⁄₁₀ = 0,70; 65% = 0,65. Urutan: 0,60 < 0,65 < 0,70 < 0,75 = ³⁄₅ < 65% < ⁷⁄₁₀ < 0,75'
  },

  /* ══════ D. PERBANDINGAN & SKALA ══════ */
  {
    no:15, cat:'Perbandingan', cc:'b-amber',
    q: 'Perbandingan umur Andi dan Budi adalah 3 : 5. Jika umur Andi 18 tahun, maka umur Budi adalah ...',
    opts: ['25 tahun', '27 tahun', '30 tahun', '35 tahun'],
    ans: 2,
    why: '3/5 = 18/x → x = (18 × 5) / 3 = 90 / 3 = 30 tahun'
  },
  {
    no:16, cat:'Perbandingan', cc:'b-amber',
    q: 'Jarak kota A ke kota B pada peta adalah 8 cm. Skala peta 1 : 500.000. Jarak sebenarnya adalah ...',
    opts: ['4 km', '40 km', '400 km', '4.000 km'],
    ans: 1,
    why: 'Jarak sebenarnya = 8 cm × 500.000 = 4.000.000 cm = 40.000 m = 40 km'
  },
  {
    no:17, cat:'Perbandingan', cc:'b-amber',
    q: 'Sebuah denah rumah dibuat dengan skala 1 : 200. Jika panjang ruang tamu pada denah 6 cm, panjang sebenarnya adalah ...',
    opts: ['60 cm', '120 cm', '600 cm (6 m)', '1.200 cm (12 m)'],
    ans: 3,
    why: 'Panjang sebenarnya = 6 × 200 = 1.200 cm = 12 m'
  },
  {
    no:18, cat:'Perbandingan', cc:'b-amber',
    q: 'Dalam 3 jam, sebuah mesin mencetak 2.700 buku. Dalam 7 jam, mesin tersebut mencetak ... buku.',
    opts: ['5.400', '6.300', '7.200', '8.100'],
    ans: 1,
    why: 'Per jam: 2.700 ÷ 3 = 900 buku/jam. Dalam 7 jam: 900 × 7 = 6.300 buku.'
  },

  /* ══════ E. PERSEN & KEUNTUNGAN ══════ */
  {
    no:19, cat:'Persen', cc:'b-teal',
    q: 'Harga beli sebuah sepeda Rp1.200.000. Dijual dengan keuntungan 25%. Harga jual sepeda tersebut adalah ...',
    opts: ['Rp1.400.000', 'Rp1.450.000', 'Rp1.500.000', 'Rp1.550.000'],
    ans: 2,
    why: 'Keuntungan = 25% × 1.200.000 = 300.000. Harga jual = 1.200.000 + 300.000 = 1.500.000'
  },
  {
    no:20, cat:'Persen', cc:'b-teal',
    q: 'Toko memberikan diskon 30% untuk baju seharga Rp250.000. Harga setelah diskon adalah ...',
    opts: ['Rp175.000', 'Rp180.000', 'Rp185.000', 'Rp200.000'],
    ans: 0,
    why: 'Diskon = 30% × 250.000 = 75.000. Harga setelah diskon = 250.000 − 75.000 = 175.000'
  },
  {
    no:21, cat:'Persen', cc:'b-teal',
    q: 'Sebuah toko membeli barang seharga Rp800.000 dan menjualnya seharga Rp680.000. Persentase kerugiannya adalah ...',
    opts: ['10%', '15%', '17,5%', '20%'],
    ans: 1,
    why: 'Rugi = 800.000 − 680.000 = 120.000. % Rugi = 120.000/800.000 × 100% = 15%'
  },

  /* ══════ F. KELILING & LUAS ══════ */
  {
    no:22, cat:'Geometri', cc:'b-coral',
    q: 'Keliling lingkaran dengan diameter 14 cm adalah ... (π = 22/7)',
    opts: ['22 cm', '44 cm', '154 cm', '176 cm'],
    ans: 1,
    why: 'K = π × d = 22/7 × 14 = 44 cm'
  },
  {
    no:23, cat:'Geometri', cc:'b-coral',
    q: 'Luas lingkaran dengan jari-jari 21 cm adalah ... (π = 22/7)',
    opts: ['1.386 cm²', '1.386 cm²', '1.296 cm²', '441 cm²'],
    ans: 0,
    why: 'L = π × r² = 22/7 × 21² = 22/7 × 441 = 22 × 63 = 1.386 cm²'
  },
  {
    no:24, cat:'Geometri', cc:'b-coral',
    q: 'Sebuah taman berbentuk trapesium dengan sisi sejajar 12 m dan 8 m, serta tinggi 6 m. Luas taman adalah ...',
    opts: ['60 m²', '72 m²', '80 m²', '96 m²'],
    ans: 0,
    why: 'L = ½ × (a + b) × t = ½ × (12 + 8) × 6 = ½ × 20 × 6 = 60 m²'
  },
  {
    no:25, cat:'Geometri', cc:'b-coral',
    q: 'Luas gabungan bangun: persegi panjang (12 cm × 8 cm) dan setengah lingkaran (diameter 8 cm) pada salah satu sisinya adalah ... (π = 3,14)',
    opts: ['128,24 cm²', '121,12 cm²', 'Rp125,12 cm²', '127,12 cm²'],
    ans: 1,
    why: 'L persegi panjang = 12 × 8 = 96 cm². L ½ lingkaran = ½ × 3,14 × 4² = ½ × 3,14 × 16 = 25,12 cm². Total = 96 + 25,12 = 121,12 cm²'
  },

  /* ══════ G. BANGUN RUANG (VOLUME) ══════ */
  {
    no:26, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Volume kubus dengan panjang rusuk 9 cm adalah ...',
    opts: ['81 cm³', '243 cm³', '729 cm³', '810 cm³'],
    ans: 2,
    why: 'V = s³ = 9³ = 9 × 9 × 9 = 729 cm³'
  },
  {
    no:27, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Sebuah balok memiliki panjang 15 cm, lebar 8 cm, dan tinggi 6 cm. Volumenya adalah ...',
    opts: ['720 cm³', '780 cm³', '840 cm³', '960 cm³'],
    ans: 0,
    why: 'V = p × l × t = 15 × 8 × 6 = 720 cm³'
  },
  {
    no:28, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Sebuah kolam renang berbentuk balok panjang 25 m, lebar 10 m, kedalaman 2 m. Kapasitas air yang dapat ditampung dalam liter adalah ...',
    opts: ['250.000 liter', '500.000 liter', '750.000 liter', '1.000.000 liter'],
    ans: 1,
    why: 'V = 25 × 10 × 2 = 500 m³. Karena 1 m³ = 1.000 liter, maka 500 m³ = 500.000 liter.'
  },
  {
    no:29, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Sebuah prisma segitiga memiliki alas berbentuk segitiga siku-siku dengan sisi 3 cm, 4 cm, 5 cm. Tinggi prisma 10 cm. Volume prisma adalah ...',
    opts: ['30 cm³', '60 cm³', '120 cm³', '150 cm³'],
    ans: 1,
    why: 'L alas segitiga = ½ × 3 × 4 = 6 cm². V = L alas × tinggi = 6 × 10 = 60 cm³'
  },
  {
    no:30, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Jumlah titik sudut, rusuk, dan sisi dari sebuah balok adalah ...',
    opts: ['8 + 12 + 6 = 26', '8 + 10 + 5 = 23', '6 + 12 + 8 = 26', '8 + 12 + 8 = 28'],
    ans: 0,
    why: 'Balok memiliki 8 titik sudut + 12 rusuk + 6 sisi = 26 unsur'
  },

  /* ══════ H. STATISTIKA ══════ */
  {
    no:31, cat:'Statistika', cc:'b-green',
    q: 'Data nilai ulangan: 7, 8, 6, 9, 8, 7, 10, 8, 6, 7. Rata-rata (mean) nilai ulangan tersebut adalah ...',
    opts: ['7,4', '7,5', '7,6', '7,8'],
    ans: 2,
    why: 'Jumlah = 7+8+6+9+8+7+10+8+6+7 = 76. Rata-rata = 76 ÷ 10 = 7,6'
  },
  {
    no:32, cat:'Statistika', cc:'b-green',
    q: 'Data: 5, 7, 8, 6, 9, 7, 8, 10, 7, 8. Modus dari data tersebut adalah ...',
    opts: ['7', '8', '7 dan 8', '6'],
    ans: 2,
    why: 'Angka 7 muncul 3 kali, angka 8 muncul 3 kali. Keduanya adalah modus (data bimodal).'
  },
  {
    no:33, cat:'Statistika', cc:'b-green',
    q: 'Data: 4, 6, 7, 9, 11, 13. Median dari data tersebut adalah ...',
    opts: ['7', '8', '9', '10'],
    ans: 1,
    why: 'Data sudah terurut. Median data genap = rata-rata dua data tengah = (7 + 9) / 2 = 16 / 2 = 8'
  },
  {
    no:34, cat:'Statistika', cc:'b-green',
    q: 'Diagram batang menunjukkan penjualan buku: Senin 120, Selasa 85, Rabu 150, Kamis 95, Jumat 130. Jumlah buku yang terjual selama 5 hari adalah ...',
    opts: ['570', '580', '590', '600'],
    ans: 1,
    why: '120 + 85 + 150 + 95 + 130 = 580 buku'
  },

  /* ══════ I. PELUANG ══════ */
  {
    no:35, cat:'Peluang', cc:'b-amber',
    q: 'Sebuah kantong berisi 4 kelereng merah, 3 kelereng biru, dan 5 kelereng hijau. Peluang terambilnya kelereng biru secara acak adalah ...',
    opts: ['1/6', '1/4', '1/3', '5/12'],
    ans: 1,
    why: 'Total kelereng = 4 + 3 + 5 = 12. Peluang biru = 3/12 = 1/4'
  },
  {
    no:36, cat:'Peluang', cc:'b-amber',
    q: 'Sebuah dadu dilempar satu kali. Peluang muncul angka prima adalah ...',
    opts: ['1/6', '2/6', '3/6', '4/6'],
    ans: 2,
    why: 'Angka prima pada dadu: 2, 3, 5 (ada 3 angka). Peluang = 3/6 = 1/2'
  },
  {
    no:37, cat:'Peluang', cc:'b-amber',
    q: 'Kotak A: 6 bola merah, 4 bola biru. Kotak B: 3 bola merah, 7 bola biru. Kotak mana yang memiliki peluang lebih besar untuk mendapatkan bola merah?',
    opts: [
      'Kotak A, karena peluang merah = 6/10 = 60%',
      'Kotak B, karena peluang merah = 3/10 = 30%',
      'Keduanya sama',
      'Tidak bisa ditentukan'
    ],
    ans: 0,
    why: 'Kotak A: P(merah) = 6/10 = 60%. Kotak B: P(merah) = 3/10 = 30%. Kotak A lebih besar.'
  },

  /* ══════ J. KOORDINAT & JARAK ══════ */
  {
    no:38, cat:'Koordinat', cc:'b-purple',
    q: 'Pada koordinat grid, titik P berada di (C, 2) dan titik Q berada di (F, 5). Jarak terpendek dari P ke Q adalah ... langkah.',
    opts: ['3 langkah', '5 langkah', '6 langkah', '8 langkah'],
    ans: 2,
    why: 'Jarak horizontal: F − C = 3 langkah. Jarak vertikal: 5 − 2 = 3 langkah. Total = 3 + 3 = 6 langkah.'
  },
  {
    no:39, cat:'Koordinat', cc:'b-purple',
    q: 'Pak Budi duduk di baris ke-3, kolom ke-5. Dalam sistem koordinat (kolom, baris), posisi Pak Budi adalah ...',
    opts: ['(3, 5)', '(5, 3)', '(3, 3)', '(5, 5)'],
    ans: 1,
    why: 'Koordinat ditulis (kolom, baris) atau (x, y). Kolom = 5, Baris = 3. Jadi koordinatnya (5, 3).'
  },
  {
    no:40, cat:'Koordinat', cc:'b-purple',
    q: 'Dari titik A(2, 1) ke titik B(2, 4), arah pergerakan yang benar adalah ...',
    opts: [
      '3 langkah ke kanan',
      '3 langkah ke atas',
      '3 langkah ke kiri',
      '3 langkah ke bawah'
    ],
    ans: 1,
    why: 'Kolom tetap (sama = 2), baris berubah dari 1 ke 4 (+3). Bertambah ke atas = 3 langkah ke atas (vertikal).'
  },
  /* ══════ K. BENTUK PECAHAN (Kisi-kisi 1) ══════ */
  {
    no:41, cat:'Pecahan', cc:'b-green',
    q: 'Pecahan ⁶⁄₈ dapat dinyatakan dalam bentuk lain yang senilai, yaitu ...',
    opts: ['¹⁄₄', '½', '¾', '²⁄₃'],
    ans: 2,
    why: '⁶⁄₈ disederhanakan: FPB dari 6 dan 8 = 2. 6÷2 = 3, 8÷2 = 4. Jadi ⁶⁄₈ = ¾.\nDapat juga diubah: desimal = 0,75 = 75% = ¾.'
  },

  /* ══════ L. CIRI BANGUN RUANG (Kisi-kisi 2) ══════ */
  {
    no:42, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Perhatikan ciri-ciri bangun ruang berikut:\n① Memiliki 1 titik puncak\n② Alasnya berbentuk lingkaran\n③ Memiliki 1 sisi lengkung dan 1 sisi datar\n④ Tidak memiliki rusuk\nBangun ruang yang dimaksud adalah ...',
    opts: ['Limas segitiga', 'Tabung', 'Kerucut', 'Bola'],
    ans: 2,
    why: 'Kerucut memiliki: 1 titik puncak, alas berbentuk lingkaran, 1 sisi lengkung + 1 sisi datar (alas), dan tidak memiliki rusuk yang lurus.\nLimas: alas poligon, punya rusuk. Tabung: 2 sisi datar, tidak ada titik puncak. Bola: tidak punya sisi datar sama sekali.'
  },

  /* ══════ M. DEBIT (Kisi-kisi 3) ══════ */
  {
    no:43, cat:'Perbandingan', cc:'b-amber',
    q: 'Sebuah kran mengalirkan air sebanyak 90 liter dalam 15 menit. Debit aliran air kran tersebut adalah ...',
    opts: ['4 liter/menit', '5 liter/menit', '6 liter/menit', '9 liter/menit'],
    ans: 2,
    why: 'Debit = Volume ÷ Waktu = 90 liter ÷ 15 menit = 6 liter/menit.\nRumus debit: D = V/t, di mana V = volume cairan dan t = waktu yang diperlukan.'
  },
];

// ═══════════════════════════════════════════
// 3. DATA — 15 SOAL ISIAN
// ═══════════════════════════════════════════
const isianData = [
  {
    no:1, cat:'Bilangan', cc:'b-blue',
    q: 'Tentukan hasil dari: 2.400 ÷ 48 × 15 − 125 + 64 × 5 = ...',
    ctx: '(Ingat: kerjakan kali dan bagi terlebih dahulu dari kiri ke kanan)',
    ans: '945',
    hint: 'Langkah: 2.400÷48 = 50, lalu 50×15 = 750, lalu 64×5 = 320',
    why: 'Langkah per langkah:\n① 2.400 ÷ 48 = 50\n② 50 × 15 = 750\n③ 64 × 5 = 320\n④ 750 − 125 + 320 = 625 + 320 = 945'
  },
  {
    no:2, cat:'FPB & KPK', cc:'b-purple',
    q: 'FPB dari 60 dan 84 adalah ...',
    ctx: '',
    ans: '12',
    hint: 'Faktorkan kedua bilangan, ambil yang bersekutu dengan pangkat terkecil',
    why: '60 = 2² × 3 × 5. 84 = 2² × 3 × 7. FPB = 2² × 3 = 12'
  },
  {
    no:3, cat:'FPB & KPK', cc:'b-purple',
    q: 'KPK dari 15, 20, dan 30 adalah ...',
    ctx: '',
    ans: '60',
    hint: '15 = 3×5, 20 = 2²×5, 30 = 2×3×5',
    why: 'KPK = 2² × 3 × 5 = 4 × 3 × 5 = 60'
  },
  {
    no:4, cat:'Pecahan', cc:'b-green',
    q: 'Hasil dari 1³⁄₄ + 2⅔ = ...',
    ctx: '',
    ans: '4 5/12',
    hint: 'Ubah ke pecahan biasa, cari KPK, lalu hitung',
    why: '1¾ = 7/4, 2⅔ = 8/3. KPK = 12. 21/12 + 32/12 = 53/12 = 4 5/12'
  },
  {
    no:5, cat:'Perbandingan', cc:'b-amber',
    q: 'Perbandingan siswa laki-laki dan perempuan di kelas adalah 3 : 4. Jika jumlah seluruh siswa 42 orang, banyak siswa perempuan adalah ...',
    ctx: '',
    ans: '24',
    hint: 'Perempuan = 4/(3+4) × 42',
    why: 'Total bagian = 3 + 4 = 7. Perempuan = 4/7 × 42 = 24 orang'
  },
  {
    no:6, cat:'Skala', cc:'b-amber',
    q: 'Jarak sebenarnya antara dua kota adalah 120 km. Pada peta dengan skala 1 : 2.000.000, jarak kedua kota tersebut pada peta adalah ... cm.',
    ctx: '',
    ans: '6',
    hint: 'Jarak peta = jarak sebenarnya ÷ skala',
    why: '120 km = 12.000.000 cm. Jarak peta = 12.000.000 ÷ 2.000.000 = 6 cm'
  },
  {
    no:7, cat:'Persen', cc:'b-teal',
    q: 'Pak Rudi membeli motor dengan harga Rp15.000.000. Setelah 2 tahun dijual dengan kerugian 20%. Harga jual motor tersebut adalah Rp...',
    ctx: '',
    ans: '12.000.000',
    hint: 'Kerugian = 20% × 15.000.000',
    why: 'Kerugian = 20% × 15.000.000 = 3.000.000. Harga jual = 15.000.000 − 3.000.000 = 12.000.000'
  },
  {
    no:8, cat:'Geometri', cc:'b-coral',
    q: 'Sebuah lingkaran memiliki keliling 88 cm. Luas lingkaran tersebut adalah ... cm². (π = 22/7)',
    ctx: '',
    ans: '616',
    hint: 'Dari keliling, cari r dulu: K = 2πr. Lalu L = πr²',
    why: '88 = 2 × 22/7 × r → r = 88 × 7 ÷ 44 = 14 cm. L = 22/7 × 14² = 22/7 × 196 = 616 cm²'
  },
  {
    no:9, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Sebuah bak air berbentuk kubus dengan panjang rusuk 60 cm diisi air hingga ¾ penuh. Volume air dalam bak adalah ... liter.',
    ctx: '(1 liter = 1.000 cm³)',
    ans: '162',
    hint: 'V kubus = s³, lalu kalikan ¾, ubah ke liter',
    why: 'V kubus = 60³ = 216.000 cm³. V air = ¾ × 216.000 = 162.000 cm³ = 162 liter'
  },
  {
    no:10, cat:'Statistika', cc:'b-green',
    q: 'Data nilai 8 siswa: 75, 80, 65, 90, 85, 70, 80, 75. Nilai rata-rata kelas tersebut adalah ...',
    ctx: '',
    ans: '77,5',
    hint: 'Jumlahkan semua nilai lalu bagi jumlah siswa',
    why: 'Jumlah = 75+80+65+90+85+70+80+75 = 620. Rata-rata = 620 ÷ 8 = 77,5'
  },
  {
    no:11, cat:'Statistika', cc:'b-green',
    q: 'Data: 3, 5, 7, 9, 11, 13, 15. Median dari data tersebut adalah ...',
    ctx: '',
    ans: '9',
    hint: 'Data sudah urut, cari nilai tengah (data ke-4 dari 7 data)',
    why: 'Data ganjil (7 data), median = data ke-(7+1)/2 = data ke-4 = 9'
  },
  {
    no:12, cat:'Peluang', cc:'b-amber',
    q: 'Sebuah kotak berisi 5 bola merah, 3 bola kuning, dan 2 bola hijau. Peluang terambilnya bola yang BUKAN merah adalah ...',
    ctx: '',
    ans: '1/2',
    hint: 'Bukan merah = kuning + hijau = 3 + 2 = 5 dari total 10',
    why: 'Bukan merah = 3 + 2 = 5. Total = 10. Peluang = 5/10 = 1/2'
  },
  {
    no:13, cat:'Koordinat', cc:'b-purple',
    q: 'Dari titik P(A, 1) ke titik Q(D, 4) pada grid koordinat (A=kolom 1, B=kolom 2, dst). Jarak terpendek adalah ... langkah.',
    ctx: '',
    ans: '6',
    hint: '|D−A| + |4−1| = ? + ?',
    why: 'Horizontal: D−A = 3 langkah. Vertikal: 4−1 = 3 langkah. Total = 6 langkah.'
  },
  {
    no:14, cat:'Bangun Ruang', cc:'b-sky',
    q: 'Sebuah balok memiliki volume 1.440 cm³, panjang 16 cm dan lebar 9 cm. Tinggi balok tersebut adalah ... cm.',
    ctx: '',
    ans: '10',
    hint: 'V = p × l × t → t = V ÷ (p × l)',
    why: 't = 1.440 ÷ (16 × 9) = 1.440 ÷ 144 = 10 cm'
  },
  {
    no:15, cat:'Persen', cc:'b-teal',
    q: 'Jumlah tabungan Dewi adalah Rp2.400.000. Ia menabung lagi Rp600.000. Persentase kenaikan tabungan Dewi adalah ...',
    ctx: '',
    ans: '25%',
    hint: '% kenaikan = (kenaikan ÷ awal) × 100%',
    why: '% kenaikan = (600.000 ÷ 2.400.000) × 100% = 0,25 × 100% = 25%'
  },
];

// ═══════════════════════════════════════════
// 4. STATE & TRACKING
// ═══════════════════════════════════════════
let pgAns   = new Array(pgData.length).fill(null);
let pgScore = 0;
let isianScore = 0;
let isianAnswered = new Array(isianData.length).fill(false);

const TOPIC_ORDER = ['Bilangan','FPB & KPK','Pecahan','Perbandingan','Persen','Geometri','Bangun Ruang','Statistika','Peluang','Koordinat'];

// ═══════════════════════════════════════════
// 5. BUILD PG
// ═══════════════════════════════════════════
function buildPG() {
  const list = document.getElementById('pg-list');
  list.innerHTML = '';

  // group by topic
  const topics = {};
  pgData.forEach((item,i) => {
    if (!topics[item.cat]) topics[item.cat] = [];
    topics[item.cat].push({item,i});
  });

  TOPIC_ORDER.forEach(cat => {
    if (!topics[cat]) return;

    const catInfo = topics[cat][0].item;
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    divider.innerHTML = `
      <div class="sd-line"></div>
      <span class="sd-label">${cat}</span>
      <span class="sd-badge badge ${catInfo.cc}">${topics[cat].length} soal</span>
      <div class="sd-line"></div>`;
    list.appendChild(divider);

    topics[cat].forEach(({item,i}) => {
      const d = document.createElement('div');
      d.className = 'soal-item'; d.id = `pg-item-${i}`;
      d.innerHTML = `
        <div class="soal-meta">
          <span class="soal-num">${item.no}</span>
          <span class="badge ${item.cc}">${item.cat}</span>
        </div>
        <div class="soal-q">${item.q}</div>
        <div class="opts" id="opts-${i}">
          ${item.opts.map((o, j) => `
            <button class="opt" onclick="pilih(${i},${j})">
              <span class="opt-label">${String.fromCharCode(65+j)}</span>
              <span>${o}</span>
            </button>`).join('')}
        </div>
        <div class="pembahasan" id="pem-${i}">
          <span class="pem-answer">Jawaban: ${item.opts[item.ans]}</span><br>
          <strong>Pembahasan:</strong> ${item.why}
        </div>`;
      list.appendChild(d);
    });
  });

  updateDashboard();
}

function pilih(si, oi) {
  if (pgAns[si] !== null) return;
  pgAns[si] = oi;

  document.getElementById(`pg-item-${si}`).classList.add('answered');
  document.querySelectorAll(`#opts-${si} .opt`).forEach((b, j) => {
    b.disabled = true;
    if (j === pgData[si].ans) b.classList.add('correct');
    else if (j === oi)        b.classList.add('wrong');
  });
  document.getElementById(`pem-${si}`).classList.add('show');
  if (oi === pgData[si].ans) pgScore++;
  updateDashboard();
}

function updateDashboard() {
  const done = pgAns.filter(a => a !== null).length;
  const total = pgData.length;
  const pct = total > 0 ? Math.round((pgScore / total) * 100) : 0;

  document.getElementById('dash-score').textContent = `${pgScore} / ${total}`;
  document.getElementById('dash-pct').textContent = `${pct}%`;
  document.getElementById('dash-done').textContent = `${done} dari ${total} soal dikerjakan`;
  document.getElementById('prog-fill').style.width = `${(done/total)*100}%`;

  // per-topic
  const topicEl = document.getElementById('topic-stats');
  if (!topicEl) return;
  topicEl.innerHTML = '';
  const topics = {};
  pgData.forEach((item,i) => {
    if (!topics[item.cat]) topics[item.cat] = {correct:0, total:0};
    topics[item.cat].total++;
    if (pgAns[i] === item.ans) topics[item.cat].correct++;
  });
  TOPIC_ORDER.forEach(cat => {
    if (!topics[cat]) return;
    const t = topics[cat];
    const d = document.createElement('div');
    d.className = 'topic-stat';
    d.innerHTML = `<div class="ts-label">${cat}</div><div class="ts-score">${t.correct}/${t.total}</div>`;
    topicEl.appendChild(d);
  });
}

function resetPG() {
  pgAns = new Array(pgData.length).fill(null);
  pgScore = 0;
  buildPG();
  window.scrollTo(0,0);
}

// ═══════════════════════════════════════════
// 6. BUILD ISIAN
// ═══════════════════════════════════════════
function buildIsian() {
  const list = document.getElementById('isian-list');
  list.innerHTML = '';

  isianData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'isian-item';
    d.innerHTML = `
      <div class="soal-meta">
        <span class="soal-num">${item.no}</span>
        <span class="badge ${item.cc}">${item.cat}</span>
      </div>
      <div class="isian-q">${item.q}</div>
      ${item.ctx ? `<div class="isian-context">${item.ctx}</div>` : ''}
      <input class="isian-inp" id="ii-${i}" placeholder="Tulis jawabanmu di sini..."
        onkeydown="if(event.key==='Enter') cekIsian(${i})"/>
      <div class="isian-row">
        <button class="cek-btn" onclick="cekIsian(${i})">Cek Jawaban</button>
        <span class="hint-txt">💡 ${item.hint}</span>
      </div>
      <div class="isian-result" id="ir-${i}"></div>`;
    list.appendChild(d);
  });
  updateIsianScore();
}

function cekIsian(i) {
  const val = document.getElementById(`ii-${i}`).value.toLowerCase().trim().replace(/[.,\s]/g,'');
  const res = document.getElementById(`ir-${i}`);
  const keys = isianData[i].ans.toLowerCase().split('/').map(k => k.trim().replace(/[.,\s]/g,''));
  const ok = keys.some(k => val === k || val.includes(k));

  if (!isianAnswered[i]) {
    isianAnswered[i] = true;
    if (ok) isianScore++;
    updateIsianScore();
  }

  res.className = 'isian-result show ' + (ok ? 'ok' : 'nope');
  res.innerHTML = ok
    ? `✓ Benar! Jawaban: <strong>${isianData[i].ans}</strong><br><em>${isianData[i].why}</em>`
    : `✗ Belum tepat. Jawaban: <strong>${isianData[i].ans}</strong><br><em>${isianData[i].why}</em>`;
}

function updateIsianScore() {
  const done = isianAnswered.filter(Boolean).length;
  document.getElementById('isian-score-num').textContent =
    `${isianScore} / ${done} (dari ${isianData.length} soal)`;
}

function resetIsian() {
  isianScore = 0;
  isianAnswered = new Array(isianData.length).fill(false);
  buildIsian();
}

// ═══════════════════════════════════════════
// 7. INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildPG();
  buildIsian();
});