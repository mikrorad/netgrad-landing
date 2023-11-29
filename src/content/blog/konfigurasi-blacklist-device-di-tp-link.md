---
title: konfigurasi Blacklist device di TP Link
date: 2023-11-29T13:59:16.238Z
summary: Mau tau cara setting nya?yuk kunjungi link ini
draft: false
tags:
  - wifi
  - tp-link
  - layer-3-protocol
---
### Topologi

![]()

### Login ke webfig TP Link

buka browser, dan masuk ke http://tplinkwifi.net atau masukkan IP 192.168.0.1 (keterangan ini tertulis /tertempel di router), kemudian Masukkan Username dan password defaultnya (admin – lihat di belakang device).

![](/images/uploads/100-06-tplink-tl-wr840n-wisp.png)

### Setelah itu langsung saja klik ke menu Wireless dan pilih Wireless MAC Filter

![](/images/uploads/img_20231129_212025.jpg)

### Mengaktifkan Fitur Blacklist

* Klik Enable untuk mengaktifkan fitur ini
* Pada filtering Rules pilih Deny

![](/images/uploads/img_20231129_212120.jpg)

### Memasukan mac address device yang ingin di blokir

* Selanjutnya pilih  Addnew

![](/images/uploads/img_20231129_212203.jpg)

* Selanjutnya masukkan MAC Address pengguna yang ingin di blokir agar tidak dapat terkoneksi.
* Pada bagian status Klik Enable.
* Terakhir Klik Save.

![](/images/uploads/img_20231129_212252.jpg)

> Noted: untuk description diisi terserah (jangan dikosongi)

Konfigurasi Blacklist pada Tp-Link telah berhasil