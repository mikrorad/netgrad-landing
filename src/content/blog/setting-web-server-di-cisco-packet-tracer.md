---
title: Setting DNS Server Di Cisco Packet Tracer
date: 2023-11-25T09:04:33.980Z
summary: Ingin tahu cara konfigurasi nya?mari kunjungi linknya
draft: false
tags:
  - cisco
---
### 1.Topologi



### 2.Setting IP Address komputer server

cara masuk ke menu server, caranya klik icon server > Desktop > IP Configuration. Atur IP nya seperti gambar berikut

### 3.Setting Dns Server

Kemudian setting DNS server. Konfigurasinya juga dilakukan di komputer server, caranya klik icon server → Services → DNS. Setting seperti pada gambar.



Keterangan :

DNS service On

Name : masukkan alamat DNS yang akan dipakai

Address : gunakan almat IP dari server yang telah kita setting DNS

Add : untuk menambahkan DNS yang sudah kita setting



### 4.Setting Ip pada pc client

Selanjutnya setting semua IP address pada PC Client yang terhubung dengan server, klik icon PC > Desktop > IP Configuration lalu setting seperti berikut PC0: 192.168.1.2

### 5.Tes ping ip pc client ke ip dns

Setelah selesai mengatur IP setiap PC, pastikan apakah PC dan dan server sudah terkoneksi dengan baik atau belum. Caranya dengan melakukan test ping dari  PC- client dengan server. Anda dapat melakukannya di command prompt PC > Desktop > Command Prompt.

### 6.Tes Dns server

. Setelah selesai memberikan IP pada setiap PC yang terhubung dengan server. Selanjutnya kita akan mencoba untuk melakukan tes browsing ke alamat DNS server (ninetekno.com). caranya klik pada salah satu PC → Desktop → Web Browser.