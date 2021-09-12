var variableKasus = {
  "1": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(1, 5, 1)",
          "jumlah_bab": "#RANGENUMBER(4, 8, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "riw_dm_kel": "#SELECTION('+','-')",
          "systole": "#RANGENUMBER(111, 139, 1)",
          "diastole": "#RANGENUMBER(65, 89, 1)",
          "pr": "#RANGENUMBER(60, 100, 1)",
          "rr": "#RANGENUMBER(16, 22, 1)",
          "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
          "saturasi": "#RANGENUMBER(96, 99, 1)"
      }
  ],
  "2": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(1, 5, 1)",
          "onset2": "#RANGENUMBER(2, 6, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "keluarga_dm": "#SELECTION('ayah','ibu')",
          "systole": "#RANGENUMBER(111, 139, 1)",
          "diastole": "#RANGENUMBER(65, 89, 1)",
          "pr": "#RANGENUMBER(60, 100, 1)",
          "rr": "#RANGENUMBER(16, 22, 1)",
          "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
          "saturasi": "#RANGENUMBER(96, 99, 1)",
          "gds": "#RANGENUMBER(125, 175, 1)",
          "gd2pp": "#RANGENUMBER(125, 175, 1)"
      }
  ],
  "3": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 45, 85, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(3, 5, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "riw_dm_kel": "#SELECTION('+','-')",
          "systole": "#RANGENUMBER(111, 139, 1)",
          "diastole": "#RANGENUMBER(65, 89, 1)",
          "pr": "#RANGENUMBER(80, 110, 1)",
          "rr": "#RANGENUMBER(18, 26, 1)",
          "suhu": "#RANGENUMBER(38.5, 39.4, 0.1)",
          "saturasi": "#RANGENUMBER(96, 99, 1)",
          "trombosit": "#RANGENUMBER(50, 125, 1)"
      }
  ],
  "4": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 45, 85, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(1, 5, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "riw_dm_kel": "#SELECTION('+','-')",
          "systole": "#RANGENUMBER(140, 170, 1)",
          "diastole": "#RANGENUMBER(80, 100, 1)",
          "pr": "#RANGENUMBER(80, 100, 1)",
          "rr": "#RANGENUMBER(18, 26, 1)",
          "suhu": "#RANGENUMBER(36.3, 37.0, 0.1)",
          "saturasi": "#RANGENUMBER(96, 99, 1)"
      }
  ],
  "5": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 18, 75, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(45, 80, 1)', '#RANGENUMBER(50, 80, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(2, 8, 1)",
          "onset2": "#RANGENUMBER(2, 5, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "riw_dm_kel": "#SELECTION('+','-')",
          "systole": "#RANGENUMBER(100, 129, 1)",
          "diastole": "#RANGENUMBER(60, 79, 1)",
          "pr": "#RANGENUMBER(100, 130, 1)",
          "rr": "#RANGENUMBER(24, 32, 1)",
          "suhu": "#RANGENUMBER(36.3, 37.9, 0.1)",
          "saturasi": "#RANGENUMBER(86, 92, 1)",
          "saturasi2": "#RANGENUMBER(96, 99, 1)"
      }
  ],
  "6": [
      {
          "jabatan_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 1', 'Tn.', 'Ny. ')",
          "nama_pasien": "#RANDOMCHAR('ABCDEFGHIJKLMNOPRSTUVWYZ')",
          "umur_pasien": "#RANGENUMBERUMUR({{kategori_pasien}}, 45, 85, 1)",
          "berat_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(60, 80, 1)', '#RANGENUMBER(70, 90, 1)')",
          "tinggi_pasien": "#IFTHENELSE('{{jenis_kelamin}} == 2', '#RANGENUMBER(150, 170, 1)', '#RANGENUMBER(150, 180, 1)')",
          "onset": "#RANGENUMBER(2, 6, 1)",
          "riw_ht_kel": "#SELECTION('+','-')",
          "riw_dm_kel": "#SELECTION('+','-')",
          "systole": "#RANGENUMBER(110, 129, 1)",
          "diastole": "#RANGENUMBER(60, 79, 1)",
          "pr": "#RANGENUMBER(70, 105, 1)",
          "rr": "#RANGENUMBER(16, 24, 1)",
          "suhu": "#RANGENUMBER(36.3, 37.3, 0.1)",
          "saturasi": "#RANGENUMBER(96, 99, 1)",
          "gds": "#RANGENUMBER(350, 450, 1)"
      }
  ]
}