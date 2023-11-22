---
title: Setting TP-Link TL-WR840N Sebagai Repeater
date: 2023-11-07T01:19:41.298Z
summary: Mau tau cara setting mode repeaternya?mari klik linknya
draft: false
tags:
  - dhcp
  - layer-3-protocol
  - tp-link
---
### Apa itu repeater?

Repeater adalah alat yang dugunakan sebagai penguat sinyal wireless yang dipancarkan oleh router/modem. Cara kerja repeater adalah menerima sinyal, kemudian akan memancarkan kembali sinyal yang ada.

### Kenapa harus repeater?

Karena dengan adanya repeater, seorang administrator jaringan tidak perlu menarik kabel untuk memperluas area jaringan tapi cukup menggunakan repeater untuk menangkap sinyal yang akan diperluas

### 1.Topologi

![](/images/uploads/screenshot_2023-11-19-21-55-16-83_ee92dd2796c5abdb79ebb8cb6a3579d6.jpg)

### 2. Menyalakan dan mereset TP link

Nyalakan dulu Router TP-Link TL-WR840N dengan adaptor bawaannya, atau apabila router anda pernah dipakai sebelumnya, silahkan reset ke pengaturan awal / pabrik, dengan cara menekan tombol  WPS/Reset yang berada di belakang router (tekan terus beberapa saat sampai lampu indikator router nyala ngeblink semua, lalu lepaskan.

![](/images/uploads/img_20231111_142642.jpg)

### 3.menyambungkan device ke TP link

Koneksikan device (laptop atau hp)yang mau dipakai untuk setting dengan Device nya, default nama wifi  TP-Link TL-WR840N biasanya bernama TP-LINK_788C, silahkan cari Wifi SSID yang bernama TP-LINK_788C, kemudian masuk dengan password default dari device. (password default  tertulis/tertempel dibelakang device )

![](/images/uploads/img20231121090016.jpg)

### 4.login ke webfig TP Link

Setelah connect buka browser, dan masuk ke http://tplinkwifi.net atau masukkan IP 192.168.0.1 (keterangan ini tertulis /tertempel di router), kemudian Masukkan Username dan password defaultnya (admin – lihat di belakang device).

![](/images/uploads/100-06-tplink-tl-wr840n-wisp.png)

### 5.Ganti mode ke extended/repeater

Masuk pada Quick Setup, next dan pilih Range Extender, kemudian klik next untuk memulai settingan.

![](/images/uploads/img_20231111_114825.jpg)

### 6.Scan ssid wifi AP yang akan ditembak Dan menyambungkanya

setelah itu,Pada AP List akan muncul beberapa sinyal wifi yang tertangkap, silakan pilih/koneksikan ke jaringan wifi akan kamu perluas sinyalnya dengan cara klik Connect

![](/images/uploads/screenshot_2023-11-11-12-56-02-52.jpg)

\-Pilih SSID Wifi yang dituju kemudian klik Connect.

### 7.SETTING SSID dan IP untuk repeater nya

masukan password wifi utama dan berikan nama wifi extender, kamu bisa memberi namanya sesuai dengan wifi utama atau berbeda nama dengan memilih Customize pada Wireless Name of Range Extender seperti gambar dibawah, lalu klik Next

![](/images/uploads/3.-setting-wireless-wifi.jpg)

Noted(saya sarankan untuk ssid repeater nya samakan dengan AP utama)

### 8.Setting network ip

Untuk Network Setting pilih Static IP atau Smart IP (DHCP), dan masukan ip address yang diinginkan jika kamu memilih Static IP(samakan Network IP nya dengan AP utama), lalu dhcp server sebaiknya disable aja agar IP langsung diberi oleh AP utama, kemudian klik.next

![](/images/uploads/4.-pilh-static-ip-dhcp-disablejpg.jpg)

### 9.Pastikan settingan yang sudah kamu pilih sudah sesuai lalu klik Next untuk menyimpan

![](/images/uploads/5.-klik-finish.jpg)

### 10.Tunggu proses rebooting atau restart selesai

![](/images/uploads/6.-tunggu-hingga-proses-rebooting-selesai.jpg)

Jika proses rebooting sudah selesai maka repeater siap digunakan