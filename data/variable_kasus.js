var variableKasus = {
    "1": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(2, 4, 1)",
            "onset2": "#RANGENUMBER(3, 6, 1)",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "tonsilkiri": "#SELECTION('T2','T3')",
            "tonsilkanan": "#SELECTION('T2','T3')"
        }
    ],
    "2": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(1, 6, 1)",
            "riw_kopi": "#SELECTION('+','-')",
            "riw_makan": "#SELECTION('+','-')",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)"
        }
    ],
    "3": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 14, 16, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(44, 62, 1)', '#RANGENUMBER(45, 70, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(153, 168, 1)', '#RANGENUMBER(158, 178, 1)')",
            "telinga": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(3, 6, 1)",
            "onset2": "#RANGENUMBER(1, 2, 1)",
            "onset_riw_keluhan_sama": "#RANGENUMBER(1, 8, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "pf_telinga_kanan": "#IFTHENELSE('\\\"{{telinga}}\\\" == \\\"kanan\\\"', 'edema (+), eritema (+)', 'edema (-), eritema (-)')",
            "serumen1": "#SELECTION('+','-')",
            "pf_telinga_kiri": "#IFTHENELSE('\\\"{{telinga}}\\\" == \\\"kanan\\\"', 'edema (-), eritema (-)', 'edema (+), eritema (+)')",
            "serumen2": "#SELECTION('+','-')",
            "obatin_ke_aurikula": "#IFTHENELSE('\\\"{{telinga}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')"
        }
    ],
    "4": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 30, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(155, 180, 1)')",
            "onsetkepala": "#RANGENUMBER(2, 7, 1)",
            "onsetmaag": "#RANGENUMBER(1, 7, 1)",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_maag_kel": "#SELECTION('+','-')",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)"
        }
    ],
    "5": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 35, 60, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(45, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 170, 1)', '#RANGENUMBER(145, 170, 1)')",
            "onsetperdarahan": "#RANGENUMBER(10, 14, 1)",
            "gantipembalut": "#RANGENUMBER(4, 7, 1)",
            "mens_sekarang": "#RANGENUMBER(8, 14, 1)",
            "siklus_mens1": "#RANGENUMBER(25, 27, 1)",
            "siklus_mens2": "#RANGENUMBER(28, 30, 1)",
            "onset_nyeri_perut": "#RANGENUMBER(2, 5, 1)",
            "skalanyeri": "#RANGENUMBER(3, 5, 1)",
            "lahiran": "#RANGENUMBER(18, 27, 1)",
            "jk_anak": "#SELECTION('laki-laki','perempuan')",
            "bblahiranak": "#RANGENUMBER(27, 33, 1)",
            "systole": "#RANGENUMBER(100, 119, 1)",
            "diastole": "#RANGENUMBER(60, 79, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
            "dorsoante": "#SELECTION('dorsofleksi','antefleksi')"
        }
    ],
    "6": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'An.', 'An. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 13, 15, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 60, 1)', '#RANGENUMBER(48, 63, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(154, 165, 1)', '#RANGENUMBER(155, 168, 1)')",
            "onset": "#RANGENUMBER(2, 4, 1)",
            "onset2": "#RANGENUMBER(2, 5, 1)",
            "pr": "#RANGENUMBER(70, 100, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(37.8, 38.5, 0.1)",
            "saturasi": "#RANGENUMBER(97, 99, 1)"
        }
    ],
    "7": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(2, 6, 1)",
            "riwdm": "#RANGENUMBER(3, 8, 1)",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "gds": "#RANGENUMBER(275, 380, 1)",
            "kolesterol": "#RANGENUMBER(250, 350, 1)",
            "asamurat": "#RANGENUMBER(4.6, 5.9, 0.1)"
        }
    ],
    "8": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 30, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 70, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(2, 4, 1)",
            "onset2": "#RANGENUMBER(2, 7, 1)",
            "riwkopi": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(70, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
            "gds": "#RANGENUMBER(90, 150, 1)",
            "kolesterol": "#RANGENUMBER(120, 180, 1)",
            "asamurat": "#RANGENUMBER(4.6, 5.7, 0.1)"
        }
    ],
    "9": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 60, 80, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(60, 80, 1)', '#RANGENUMBER(60, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 160, 1)', '#RANGENUMBER(150, 170, 1)')",
            "onset": "#RANGENUMBER(1, 4, 1)",
            "onset2": "#RANGENUMBER(2, 4, 1)",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(80, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
            "gds": "#RANGENUMBER(90, 150, 1)",
            "kolesterol": "#RANGENUMBER(250, 350, 1)",
            "asamurat": "#RANGENUMBER(4.6, 5.7, 0.1)"
        }
    ],
    "10": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'An.', 'An. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 9, 11, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(27, 38, 0.5)', '#RANGENUMBER(28, 40, 0.5)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(132, 142, 0.5)', '#RANGENUMBER(134, 143, 0.5)')",
            "onset": "#RANGENUMBER(3, 6, 1)",
            "riwkeluhansama": "#RANGENUMBER(3, 9, 1)",
            "pr": "#RANGENUMBER(70, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(97, 99, 1)",
            "lututdexsin": "#SELECTION('dextra','sinistra')",
            "dosispct": "#IFTHENELSE('{{berat_pasien}} >= 34', '1', '3/4')",
            "dosisamox": ""
        }
    ],
    "11": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 20, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(2, 3, 1)",
            "onsetmuntah": "#RANGENUMBER(1, 2, 1)",
            "jumlahmuntah": "#RANGENUMBER(2, 6, 1)",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)"
        }
    ],
    "12": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'An.', 'An. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 11, 14, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(40, 55, 0.5)', '#RANGENUMBER(40, 58, 0.5)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(148, 160, 0.5)', '#RANGENUMBER(150, 162, 0.5)')",
            "matasebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(1, 4, 1)",
            "matasebelahlagi": "#IFTHENELSE('\\",
            "pilek": "#RANGENUMBER(3, 7, 1)",
            "riw_alergi_kel": "#SELECTION('+','-')",
            "pr": "#RANGENUMBER(80, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(97, 99, 1)",
            "dexsin": "#IFTHENELSE('\\",
            "tetesmatasebelah": "#IFTHENELSE('\\\"{{matasebelah}}\\\" == \\\"kanan\\\"', 'OD', 'OS')"
        }
    ],
    "13": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(1, 3, 1)",
            "matasebelah": "#SELECTION('kanan','kiri')",
            "riwbatukpilek": "#RANGENUMBER(2, 5, 1)",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "OSOD": "#IFTHENELSE('\\\"{{matasebelah}}\\\" == \\\"kanan\\\"', 'OD', 'OS')"
        }
    ],
    "14": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 70, 90, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 70, 1)', '#RANGENUMBER(45, 70, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 175, 1)', '#RANGENUMBER(145, 175, 1)')",
            "onset": "#RANGENUMBER(4, 8, 1)",
            "hari": "#RANGENUMBER(2, 4, 1)",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)"
        }
    ],
    "15": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 70, 90, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 70, 1)', '#RANGENUMBER(45, 70, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 175, 1)', '#RANGENUMBER(145, 175, 1)')",
            "onset": "#RANGENUMBER(4, 8, 1)",
            "hari": "#RANGENUMBER(2, 4, 1)",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(140, 159, 1)",
            "diastole": "#RANGENUMBER(90, 99, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)"
        }
    ],
    "16": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "telapakpunggung": "#SELECTION('telapak','punggung')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(10, 30, 5)",
            "penyebab": "#SELECTION('pecahan kaca','ujung besi tajam')",
            "lengan_tangan": "",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "dorsumventral": "#IFTHENELSE('\\\"{{telapakpunggung}}\\\" == \\\"telapak\\\"', 'ventral', 'dorsum')",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "pjg": "#RANGENUMBER(2, 4, 0.5)",
            "lbr": "#RANGENUMBER(0.2, 0.4, 0.1)",
            "dalam": "#RANGENUMBER(0.1, 0.3, 0.1)"
        }
    ],
    "17": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "telapakpunggung": "#SELECTION('telapak','punggung')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(10, 30, 5)",
            "penyebab": "#SELECTION('ujung meja saat terjatuh','pisau saat memasak')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "dorsumventral": "#IFTHENELSE('\\\"{{telapakpunggung}}\\\" == \\\"telapak\\\"', 'ventral', 'dorsum')",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "pjg": "#RANGENUMBER(3, 7, 0.5)",
            "lbr": "#RANGENUMBER(0.3, 0.5, 0.1)",
            "dalam": "#RANGENUMBER(0.2, 0.4, 0.1)"
        }
    ],
    "18": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 65, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "akibat": "#SELECTION('terjatuh dari motor saat menabrak trotoar','diserempet motor akibat sedang menyebrang jalan')",
            "onset": "#RANGENUMBER(10, 45, 5)",
            "riw_maag_kel": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(97, 99, 1)",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "angulardisplaced": "#SELECTION('angular','oblique displaced')"
        }
    ],
    "19": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 60, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "akibat": "#SELECTION('terjatuh dari motor saat menabrak trotoar','diserempet motor akibat sedang menyebrang jalan')",
            "onset": "#RANGENUMBER(10, 45, 5)",
            "riw_maag_kel": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_jantung_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(97, 99, 1)",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')"
        }
    ],
    "20": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 24, 35, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "GPA": "#SELECTION('G2P1A0','G1P0A0')",
            "onset": "#RANGENUMBER(2,6, 1)",
            "onsetawal": "#RANGENUMBER(2,3, 1)",
            "usiapernikahan": "#RANGENUMBER(4, 7, 1)",
            "menarche": "#RANGENUMBER(10, 13, 1)",
            "siklus_mens": "#SELECTION('25-27','28-30','26-29')",
            "durasimin": "#RANGENUMBER(4, 5, 1)",
            "durasimax": "#RANGENUMBER(6, 7, 1)",
            "jmlhpembalut": "#SELECTION('2-3','3-4')",
            "dismenorea": "#SELECTION('(+) kadang-kadang, tidak mengganggu','(-)')",
            "g1": "#IFTHENELSE('\\\"{{GPA}}\\\" == \\\"G2P1A0\\\"', 'kehamilan pertama 3 tahun yang lalu', 'kehamilan saat ini')",
            "hpht": "#RANGENUMBER(35, 45, 1)",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "dexsin": "#SELECTION('dextra','sinistra')"
        }
    ],
    "21": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 24, 35, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(145, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "GPA": "#SELECTION('G2P1A0','G1P0A0')",
            "onset": "#RANGENUMBER(2,6, 1)",
            "onsetawal": "#RANGENUMBER(2,3, 1)",
            "usiapernikahan": "#RANGENUMBER(4, 7, 1)",
            "menarche": "#RANGENUMBER(10, 13, 1)",
            "siklus_mens": "#SELECTION('25-27','28-30','26-29')",
            "durasimin": "#RANGENUMBER(4, 5, 1)",
            "durasimax": "#RANGENUMBER(6, 7, 1)",
            "jmlhpembalut": "#SELECTION('2-3','3-4')",
            "dismenorea": "#SELECTION('(+) kadang-kadang, tidak mengganggu','(-)')",
            "g1": "#IFTHENELSE('\\\"{{GPA}}\\\" == \\\"G2P1A0\\\"', 'kehamilan pertama 2 tahun yang lalu', 'kehamilan saat ini')",
            "hpht": "#RANGENUMBER(35, 45, 1)",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "dexsin": "#SELECTION('dextra','sinistra')"
        }
    ],
    "22": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 45, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(2, 6, 1)",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(96, 99, 1)",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "gds": "#RANGENUMBER(140, 190, 1)"
        }
    ],
    "23": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 45, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(2, 6, 1)",
            "riw_dm_kel": "#SELECTION('+','-')",
            "riw_ht_kel": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.2, 0.1)",
            "saturasi": "#RANGENUMBER(96, 99, 1)",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "gds": "#RANGENUMBER(140, 190, 1)"
        }
    ],
    "24": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 90, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "muntah": "#RANGENUMBER(4, 8, 1)",
            "mencret": "#RANGENUMBER(2, 4, 1)",
            "onset": "#RANGENUMBER(2, 4, 1)",
            "demam": "#RANGENUMBER(2, 4, 1)",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "ayahibu": "#SELECTION('ayah','ibu')",
            "loperamide": "#SELECTION(' dan Loperamide untuk keluhan BAB cair.','.')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 24, 1)",
            "suhu": "#RANGENUMBER(38.0, 38.6, 0.1)",
            "leukosit": "#RANGENUMBER(13000, 18000, 1000)",
            "led": "#RANGENUMBER(35, 45, 1)",
            "sgot": "#RANGENUMBER(50, 80, 1)",
            "sgpt": "#RANGENUMBER(50, 80, 1)",
            "biltot": "#RANGENUMBER(3.1, 6.0, 0.1)"
        }
    ],
    "25": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 90, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "muntah": "#RANGENUMBER(4, 8, 1)",
            "mencret": "#RANGENUMBER(2, 4, 1)",
            "onset": "#RANGENUMBER(2, 4, 1)",
            "demam": "#RANGENUMBER(2, 4, 1)",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "ayahibu": "#SELECTION('ayah','ibu')",
            "loperamide": "#SELECTION(' dan Loperamide untuk keluhan BAB cair.','.')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 24, 1)",
            "suhu": "#RANGENUMBER(38.0, 38.6, 0.1)",
            "leukosit": "#RANGENUMBER(13000, 18000, 1000)",
            "led": "#RANGENUMBER(35, 45, 1)"
        }
    ],
    "26": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 35, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "onset": "#RANGENUMBER(2, 6, 1)",
            "riw_kopi": "#SELECTION('+','-')",
            "riw_makan": "#SELECTION('+','-')",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(60, 100, 1)",
            "rr": "#RANGENUMBER(16, 22, 1)",
            "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)"
        }
    ],
    "27": [
        {
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 5, 7, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(18, 24, 0.5)', '#RANGENUMBER(19, 25, 0.5)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(110, 118, 0.5)', '#RANGENUMBER(110, 118, 0.5)')",
            "telinga": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(2, 3, 1)",
            "onset2": "#RANGENUMBER(1, 2, 1)",
            "onsetbapil": "#RANGENUMBER(4, 7, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(18, 24, 1)",
            "suhu": "#RANGENUMBER(38.0, 38.6, 0.1)",
            "timpanikanan": "#IFTHENELSE('\"{{telinga}}\" == \"kanan\"', 'eritema (+), bulging (+)', 'eritema (-), bulging (-)')",
            "serumen1": "#SELECTION('+','-')",
            "timpanikiri": "#IFTHENELSE('\"{{telinga}}\" == \"kanan\"', 'eritema (-), bulging (-)', 'eritema (+), bulging (+)')",
            "serumen2": "#SELECTION('+','-')"
        }
    ],
    "28": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(3, 6, 1)",
            "onsetdm": "#RANGENUMBER(2, 4, 1)",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 24, 1)",
            "suhu": "#RANGENUMBER(37.8, 38.5, 0.1)",
            "saturasi": "#RANGENUMBER(96, 99, 1)",
            "latmed": "#SELECTION('lateral','medial')",
            "antpost": "#SELECTION('anterior','posterior')",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "leukosit": "#RANGENUMBER(12000, 18000, 1000)",
            "gds": "#RANGENUMBER(250, 350, 1)"
        }
    ],
    "29": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(3, 6, 1)",
            "onsetdm": "#RANGENUMBER(2, 4, 1)",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 24, 1)",
            "suhu": "#RANGENUMBER(37.8, 38.5, 0.1)",
            "saturasi": "#RANGENUMBER(96, 99, 1)",
            "latmed": "#SELECTION('lateral','medial')",
            "antpost": "#SELECTION('anterior','posterior')",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "leukosit": "#RANGENUMBER(12000, 18000, 1000)",
            "led": "#RANGENUMBER(30, 50, 1)",
            "gds": "#RANGENUMBER(250, 350, 1)"
        }
    ],
    "30": [
        {
            "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
            "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
            "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 40, 75, 1)",
            "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 75, 1)', '#RANGENUMBER(50, 80, 1)')",
            "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(140, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
            "sebelah": "#SELECTION('kanan','kiri')",
            "onset": "#RANGENUMBER(3, 6, 1)",
            "onsetdm": "#RANGENUMBER(2, 4, 1)",
            "riw_maag_keluarga": "#SELECTION('+','-')",
            "riw_ht_keluarga": "#SELECTION('+','-')",
            "riw_dm_keluarga": "#SELECTION('+','-')",
            "riw_jantung_keluarga": "#SELECTION('+','-')",
            "systole": "#RANGENUMBER(111, 139, 1)",
            "diastole": "#RANGENUMBER(65, 89, 1)",
            "pr": "#RANGENUMBER(80, 110, 1)",
            "rr": "#RANGENUMBER(16, 24, 1)",
            "suhu": "#RANGENUMBER(37.8, 38.5, 0.1)",
            "saturasi": "#RANGENUMBER(96, 99, 1)",
            "latmed": "#SELECTION('lateral','medial')",
            "antpost": "#SELECTION('anterior','posterior')",
            "dexsin": "#IFTHENELSE('\\\"{{sebelah}}\\\" == \\\"kanan\\\"', 'dextra', 'sinistra')",
            "leukosit": "#RANGENUMBER(12000, 18000, 1000)",
            "led": "#RANGENUMBER(30, 50, 1)",
            "gds": "#RANGENUMBER(250, 350, 1)"
        }
    ]
}