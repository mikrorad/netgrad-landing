---
title: Setting DNS Server Di Cisco Packet Tracer
date: 2023-11-25T09:04:33.980Z
summary: Ingin tahu cara konfigurasi nya?mari kunjungi linknya
draft: false
tags:
  - cisco
---
### Apa itu DNS server?

DNS adalah server yang bisa melayani permintaan untuk mengetahui sebuah IP address yang digunakan oleh suatu domain. Permisalan mudahnya , saat anda ingin mengakses google.com maka server DNS yang akan mencari IP address dari facebook sehingga komputer anda dapat mengakses Google.com

### Fungsi DNS server 

Untuk mengubah atau menerjemahkan hostname (nama) website ke ip website sehingga client tidak perlu mengetik ip website yang dituju tapi cukup mengetik nama website nya saja

### 1.Topologi

![](/images/uploads/img-20231125-wa0010.jpg)

* Server (untuk dns server)
* Pc(untuk client)
* Switch (untuk penambah port)

### 2.Setting IP Address komputer server

cara masuk ke menu server, caranya klik icon server > Desktop > IP Configuration. Atur IP nya seperti gambar berikut

### 3.Setting Dns Server

Kemudian setting DNS server. Konfigurasinya juga dilakukan di komputer server, caranya klik icon server → Services → DNS. Setting seperti pada gambar.

![](/images/uploads/img_20231125_213159.jpg)

Keterangan :

* DNS service On
* Name : masukkan alamat DNS yang akan dipakai
* Address : gunakan almat IP dari server yang telah kita setting DNS
* Add : untuk menambahkan DNS yang sudah kita setting

### 4.Setting Ip pada pc client

Selanjutnya setting semua IP address pada PC Client yang terhubung dengan server, klik icon PC > Desktop > IP Configuration lalu setting seperti berikut PC0: 192.168.5.3 PC1:192.168.5.2

![](/images/uploads/img_20231125_213315.jpg)

![](/images/uploads/img-20231125-wa0007.jpg)

![](/images/uploads/img-20231125-wa0008.jpg)

### 5.Tes ping ip pc client ke ip dns

Setelah selesai mengatur IP setiap PC, pastikan apakah PC dan dan server sudah terkoneksi dengan baik atau belum. Caranya dengan melakukan test ping dari  PC- client dengan server. Anda dapat melakukannya di command prompt PC > Desktop > Command Prompt.

![](/images/uploads/img_20231125_214127.jpg)

![](/images/uploads/img-20231125-wa0006.jpg)

### 6.Tes Dns server

. Setelah selesai memberikan IP pada setiap PC yang terhubung dengan server. Selanjutnya kita akan mencoba untuk melakukan tes browsing ke alamat DNS server (netgrad.id). caranya klik pada salah satu PC → Desktop → Web Browser.

![]()

![](/images/uploads/img-20231125-wa0002.jpg)