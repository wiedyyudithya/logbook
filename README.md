# Logbook Generator

## Bagaimana untuk memulai?

1. Download ZIP dan extract di local komputer.
!["DOWNLOAD FROM GITHUB"](https://user-images.githubusercontent.com/53747430/125223274-b109b380-e2f5-11eb-9ad9-c97f560036aa.png) 

2. Buka file buat_kasus.html dengan browser.
!["BUKA FILE"](https://user-images.githubusercontent.com/53747430/125224057-05616300-e2f7-11eb-89da-4084a48d7e5c.png) 

3. Pilih data yang diinginkan.
!["Tampilan Aplikasi"](https://user-images.githubusercontent.com/53747430/125224339-a4865a80-e2f7-11eb-941a-b350968a3ec2.png) 

4. Klik Generate.
5. Data hasil generate akan ditampilkan
![image](https://user-images.githubusercontent.com/53747430/125224600-237b9300-e2f8-11eb-8048-57324d9dc93c.png)

6. Klik baris table untuk melihat detail data yang dibuat.
![image](https://user-images.githubusercontent.com/53747430/125224926-9edd4480-e2f8-11eb-8881-f038cfc34cd6.png)


## Bagaimana cara menambah Bank Kasus?

1. Buka file di bank_kasus.js (data/bank_kasus.js)
2. Tambahkan data bank_kasus dengan format seperti berikut.
```
    {
      "No": 1,
      "Kategori Jenis Kelamin Pasien": "1,2",
      "Kategori Kasus": "1",
      "Kode Kegiatan": "1",
      "Kategori Pasien": "2,3",
      "Data Dasar Pasien": "{{jabatan_pasien}} {{nama_pasien}}, {{umur_pasien}} th, BB : {{berat_pasien}} kg, TB : {{tinggi_pasien}} cm",
      "Unit Pelayanan": "2,3",
      "Data Ringkasan Penyakit": "S : \nKeluhan Utama : \nPasien datang dengan keluhan nyeri ulu hati sejak {{onset}} yang lalu. \n\nKeluhan Tambahan : \nPasien sering sendawa.  \n\nRiwayat Penyakit Sekarang : \nPasien datang untuk berobat dengan keluhan nyeri ulu hati sejak {{onset}} yang lalu. Nyeri dirasakan seperti ditusuk-tusuk. Nyeri dirasakan terus-terusan sepanjang hari. Pasien mengaku sering telat makan, jika telat makan ulu hati selalu terasa nyeri seperti ditusuk-tusuk. Kadang-kadang nyeri ulu hati terasa seperti menembus hingga ke bagian belakang. Selain itu, pasien menjadi sering sendawa. \n\nRiwayat Penyakit Dahulu : \nRiwayat magh ({{riwayat_maag}})\nRiwayat hipertensi (-)\nRiwayat diabetes (-)\nRiwayat penyakit jantung (-)\n\nRiwayat Penyakit Keluarga : \nRiwayat maag ({{maag_keluarga}})\nRiwayat hipertensi ({{hipertensi_keluarga}})\nRiwayat diabetes ({{diabetes_keluarga}})\nRiwayat penyakit jantung (-)\n\nRiwayat Pengobatan : \nPasien belum mengkonsumsi obat untuk meringankan keluhan. \n\nO :\n\nKU : tampak sakit sedang\nKesadaran : compos mentis\nTD : {{systole}}/{{diastole}} mmHg ; PR: {{pr}} x/min ; RR: {{rr}} x/min ; T: {{suhu}} C\nMata : KA (-/-); SI (-/-)\nHidung : Sekret (-/-) \nMulut : Bibir kering (-); Faring Hiperemis (-)\nThorax : pergerakan dinding dada simetris \nCOR : S1 & S2 reguler ; Murmur (-);  Gallop (-) \nPulmo : Vesikuler (+/+); rhonki (-/-); wheezing (-/-)\nAbdomen : Supple, datar,  BU (+) N; Nyeri tekan epigastrium (+)\nEkstremitas : Akral hangat; nadi teraba kuat, CRT < 2 detik; edema (-)",
      "Diagnosis": "4580",
      "Penatalaksanaan": "Farmakologi :\nAntasida doen 500 mg tab No. XV S 3 dd 1 a.c\nRanitidine 150 mg tab No. X S 2 dd 1 a.c\n\nNon-farmakologi :\nMakan dalam porsi sedikit dengan frekuensi sering (2 jam sekali makan)\nHindari makanan yang pedas, asam, dan berlemak",
      "Tindakan Medis": ""
    },
```
-  Kategori Jenis Kelamin Pasien : 1 (untuk Pria), 2 (untuk Wanita)
-  Kategori Kasus : 1 (Non-Covid), 2 (Kasus Suspek), 3 (Kasus Probable), 4 (Kontak Erat), 5 (Kasus Konfirmasi)
-  Kode Kegiatan : 1 (MEDIK), 2 (BEDAH), 3 (KEGAWAT-DARURATAN), 4 (KEBIDANAN DAN PERINATAL), 5 (KEJIWAAN), 6 (MEDIKOLEGAL)
-  Kategori Pasien : 1 (Anak - Bayi), 2 (Dewasa), 3 (Lansia)
-  Unit Pelayanan : 1 (Stase 1 - RS - Poli), 2 (Stase 2 - RS - UGD), 3 (Stase 3 - Puskesmas)
-  Diagnosis : Buka file diagnosis.js (data/diagnosis.js)
-  Tindakan Medis : 1 (MEMASANG INFUS), 2 (MEMASANG KATETER), 3 (MENJAHIT LUKA), 4 (BEDAH MINOR), 5 (MEMASANG NGT), 6 (MENOLONG PARTUS NORMAL)
