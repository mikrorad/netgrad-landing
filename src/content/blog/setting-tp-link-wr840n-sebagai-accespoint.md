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

![](/images/uploads/screenshot_2023-11-23-21-51-54-35_ee92dd2796c5abdb79ebb8cb6a3579d6.jpg)

### login ke webfig TP Link

buka browser, dan masuk ke http://tplinkwifi.net atau masukkan IP 192.168.0.1 (keterangan ini tertulis /tertempel di router), kemudian Masukkan Username dan password defaultnya (admin – lihat di belakang device).

![](/images/uploads/100-06-tplink-tl-wr840n-wisp.png)

### Kemudian klik Next pada halaman Quick Setup

![](/images/uploads/screenshot-15-.png)

### Dan pada pilihan Operation Mode pilih Access Point

![](/images/uploads/img_20231123_113141.jpg)

### Lalu pada bagian Wireless buat nama SSID/Wifi dan Password yang diinginkan, kemudian Next

![](/images/uploads/img_20231123_112435.jpg)

### Kemudian pada Networking Setting

* LAN Type : Static IP
* IP Address : Sesuaikan dengan IP Jaringan
* Subnet Mask : 255.255.255.0
* DHCP Server : Disable agar mendapatkan IP dari Modem utama 

  ![](/images/uploads/img_20231123_112349.jpg)

### Dan klik Finish untuk menyimpan settingan

![](/images/uploads/img_20231123_112600.jpg)

### Selesai, tunggu hingga rebooting/restart selesai

![](/images/uploads/screenshot-21-.png)