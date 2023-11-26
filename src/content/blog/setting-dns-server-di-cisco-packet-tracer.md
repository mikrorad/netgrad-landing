---
title: Setting Web Server di Cisco Packet Tracer
date: 2023-11-25T08:08:49.302Z
summary: Mau tau cara setting nya?yuk kunjungi link ini
draft: false
tags:
  - layer-3-protocol
---
* ### Ser

### Apa itu web server?

Web server adalah sebuah software (perangkat lunak) yang memberikan layanan berupa data yang berbentuk halaman website. Berfungsi untuk menerima permintaan HTTP atau HTTPS dari klien atau kita kenal dengan web browser (Chrome, google dll). Selanjutnya ia akan mengirimkan respon atas permintaan tersebut kepada client dalam bentuk halaman web.

### FungsFungsi Web server

Fungsi utama dari web server adalah melayani request dari para client dalam berbentuk halaman website seperti http dan https

### 1.Topologi

![](/images/uploads/img-20231125-wa0010.jpg)

* Server (untuk web server)
* Switch (untuk penambah port ke server)
* Pc (sebagai client)

### 2.Setting IP Address komputer server

Setting IP Address komputer server 

cara masuk ke menu server, caranya klik icon server > Desktop > IP Configuration. Atur IP nya seperti gambar berikut.

### 3.Konfigurasi http server

setelah selesai memberikan IP server, selanjutnya kita akan membuat HTTP nya. masih di menu server, pilih services > HTTP seperti gambar berikut. pastikan HTTP dalam posisi On. 

![](/images/uploads/img_20231126_125622.jpg)

### 4.Mengedit file html

untuk mengedit file HTTP nya klik di index.html. setelah membuka index.html hapus semua HTML yang ada, kemudian kreasikan sendiri file HTML nya sesuai selera anda. contoh singkat seperti pada gambar berikut. Kemudian tutup jika sudah selesai.

![](/images/uploads/img_20231126_125704.jpg)

### 5.Setting Ip pada pc client

Selanjutnya setting semua IP address pada PC Client yang terhubung dengan server, klik icon PC > Desktop > IP Configuration lalu setting seperti berikut PC0: 192.168.5.3 PC1: 192.168.5.2

![](/images/uploads/img_20231107_194505.jpg)

![](/images/uploads/img-20231125-wa0008.jpg)

![](/images/uploads/img-20231125-wa0007.jpg)

### 6.Tes koneksi dengan ping antar pc ke server

Setelah selesai mengatur IP setiap PC, pastikan apakah PC dan dan server sudah terkoneksi dengan baik atau belum. Caranya dengan melakukan test ping dari  PC- client dengan server. Anda dapat melakukannya di command prompt PC > Desktop > Command Prompt.

![](/images/uploads/img_20231125_214127.jpg)

![](/images/uploads/img-20231125-wa0006.jpg)

### 7.Tes web server

Terakhir tes apakah web server berhasil atau tidak dengan cara klik pada PC client > Desktop > Web Browser kemudian  masukkan IP address komputer server, berikut hasilnya.

![]()

![](/images/uploads/img-20231125-wa0005.jpg)

> Sekian tutorial singkatnya untuk konfigurasi web server dengan Cisco Packet Tracer, semoga bermanfaat dan terimakasih.