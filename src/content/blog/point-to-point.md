---
title: Point to Point
date: 2023-11-06T12:26:51.177Z
summary: Tutorial cara configurasi mikrotik point to point pada mikrotik
draft: false
tags:
  - point-to-point
---
Point to Point (PTP) adalah sebuah metode koneksi jaringan yang menghubungkan dua titik secara langsung, tanpa melalui router atau switch. 

**KELEBIHAN MENGGUNAKAN PTP** 

 PTP sering digunakan untuk menghubungkan dua lokasi yang berjauhan, seperti kantor cabang dengan kantor pusat, atau jaringan antar desa

![contoh pada gambaran point to point](/images/uploads/top2-400.png "point to point")

**GAMBAR TOPOLOGI POINT TO POINT**

![topologi point to point](/images/uploads/topologi1.jpg "topologi")

**BERIKUT CARA CONFIGURASI POINT TO POINT** 

1. Kalian hubungkan masing-masing router mikrotik ke PC atau laptop kalian pada port Ether 1 pada topologi di atas,di dalam hal ini, port yang pakai adalah ether3 pada Access Point dan ether 2 pada Client

   ![masukan ip access point dengan wlan1 dan client](/images/uploads/28.png "ip add access point dengan wlan1 dan client")
2. Masukan alamat IP address list dengan interface yang di gunakan,lalu masukan Alamat IP pada pc atau laptop 192.168.1.2/24 dan alamat wlan1 10.10.10.1/24\
   IP Client 192.168.3.2/24 dan  wlan1 10.10.10.3/24

   ![Setting ip pc atau laptop masing-masing](/images/uploads/48.png "setting ip pc atau laptop masing-masing")
3. Lalu setting IP PC/Laptop kalian seperti di atas,setting dengan masuk ke ***contol panel lalu pilih network and internet lalu pilih network and sharing center,klick pada change network adaptor setting lalu cari jaringan kalian yang tadi hubungkan ke pc lalu ganti ip kalian dengan 192.168.3.2 subbnet mask 255.255.255.0 deffault gateway akan terisi otomatis***

   ![tambahkan route list](/images/uploads/38.png "tambahkan route list")
4. Tambahkan route list dengan pilih menu Routing lalu klik ‘+’ dan masukkan alamat IP Access Point pada Client dan lalu sebaliknya IP Client pada Access Point.