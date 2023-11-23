---
title: "Setting Tp Link WR840N Sebagai Accespoint "
date: 2023-11-23T03:38:05.477Z
summary: Ingin tahu cara konfigurasi nya?ayo klik linknya
draft: false
tags:
  - layer-3-protocol
  - dhcp
  - tp-link
---
### Apa Itu Accespoint?

Accespoint adalah sebuah perangkat jaringan yang berfungsi sebagai perluasan jaringan melalui jaringan nirkabel/kabel.cara kerjanya hampir sama Dengan switch akan tetapi bedanya Accespoint menyebarkan jaringan melalui wireless dan kabel tidak seperti Switch yang hanya menyebarkan melalui kabel saja

### Kenapa Harus Accespoint?

Dengan Adanya Accespoint semua client yang terconnect di Accespoint tersebut akan mendapatkan Ip langsung dari router pusat sehingga client" yang tersambung ke Accespoint bisa dikelola langsung oleh router pusat

### Topologi

![]()

### login ke webfig TP Link

buka browser, dan masuk ke http://tplinkwifi.net atau masukkan IP 192.168.0.1 (keterangan ini tertulis /tertempel di router), kemudian Masukkan Username dan password defaultnya (admin – lihat di belakang device).

![]()

### Kemudian klik Next pada halaman Quick Setup

![]()

### Dan pada pilihan Operation Mode pilih Access Point

![]()

### Lalu pada bagian Wireless buat nama SSID/Wifi dan Password yang diinginkan, kemudian Next

![]()

### Kemudian pada Networking Setting

* LAN Type : Static IP
* IP Address : Sesuaikan dengan IP Jaringan
* Subnet Mask : 255.255.255.0
* DHCP Server : Disable agar mendapatkan IP dari Modem utama 

  ![]()

### Dan klik Finish untuk menyimpan settingan

![]()

### Selesai, tunggu hingga rebooting/restart selesai

![]()