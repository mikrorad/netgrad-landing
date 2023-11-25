---
title: Setting Web Server di Cisco Packet Tracer
date: 2023-11-25T08:08:49.302Z
summary: Mau tau cara setting nya?yuk kunjungi link ini
draft: false
tags:
  - layer-3-protocol
---
### 1.Topologi

![](/images/uploads/img-20231125-wa0010.jpg)

### 2.Setting IP Address komputer server 

Setting IP Address komputer server 

cara masuk ke menu server, caranya klik icon server > Desktop > IP Configuration. Atur IP nya seperti gambar berikut.

### 3.Konfigurasi http server

setelah selesai memberikan IP server, selanjutnya kita akan membuat HTTP nya. masih di menu server, pilih services > HTTP seperti gambar berikut. pastikan HTTP dalam posisi On. 

### 4.Mengedit file html

untuk mengedit file HTTP nya klik di index.html. setelah membuka index.html hapus semua HTML yang ada, kemudian kreasikan sendiri file HTML nya sesuai selera anda. contoh singkat seperti pada gambar berikut. Kemudian tutup jika sudah selesai.

### 5.Setting Ip pada pc client

Selanjutnya setting semua IP address pada PC Client yang terhubung dengan server, klik icon PC > Desktop > IP Configuration lalu setting seperti berikut PC0: 192.168.1.2

### 6.Tes koneksi dengan ping antar pc ke server

Setelah selesai mengatur IP setiap PC, pastikan apakah PC dan dan server sudah terkoneksi dengan baik atau belum. Caranya dengan melakukan test ping dari  PC- client dengan server. Anda dapat melakukannya di command prompt PC > Desktop > Command Prompt.

### 7.Tes web server 

Terakhir tes apakah web server berhasil atau tidak dengan cara klik pada PC client > Desktop > Web Browser kemudian  masukkan IP address komputer server, berikut hasilnya.

> Sekian tutorial singkatnya untuk konfigurasi web server dengan Cisco Packet Tracer, semoga bermanfaat dan terimakasih.