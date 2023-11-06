---
title: Cara Akses Mikrotik Rumah Dari Seluruh Dunia
date: 2023-11-06T15:03:19.550Z
summary: Mau bisa akses Mikrotik dari mana saja? mari ikuti caranya.
draft: false
tags:
  - remote
---
L2TP atau Layer 2 Tunneling Protocol adalah protokol tunneling yang sering dikombinasikan dengan protokol keamanan lain seperti IPSec untuk membuat koneksi VPN yang sangat aman. L2TP menghasilkan tunnel antara dua titik koneksi 

Kenapa L2TP?

L2TP sering digunakan untuk mengakses mikrotik kalian dari jarak jauh. Selain itu cara penggunaannya mudah dan koneksi yang sangat aman untuk kita gunakan. 

Fungsi VPN

1. Menjaga Privasi
2. Meningkatkan keamanan
3. Memberikan kemudahan untuk meremote perangkat jaringan 

Jika punya Mikrotik CHR di VPS bisa kalian gunakan sebagai VPN.

Berikut topologi yang akan kita buat:

![](/images/uploads/whatsapp-image-2023-11-06-at-19.37.10.jpeg)

Kita punya Mikrotik Server yang akan berfungsi sebagai VPN untuk remote  Mikrotik Client.

#### **Setting L2TP Server**

**1. Masuk menu PPP di Winbox**

![](/images/uploads/screenshot-1-.png)

**2. Masuk Menu Secrets**

![](/images/uploads/screenshot-2-.png)

**3. Tambah Secrets baru**

![](/images/uploads/screenshot-3-.png)

**4. Tambah PPP Secrets**

Disini kalian pilih service **L2TP** dan bebas membuat Name dan Password nya, untuk Local Address dan Remote Address kalian bisa sesuaikan sendiri yaa.

![](/images/uploads/screenshot-4-.png)

Setelah kalian membuat **Secrets L2TP**, selanjutkan kita buat forwarding dimenu **Firewall.**

Kali ini kita akan membuat **Remote Mikrotik** dengan metode **L2TP**, mari ikuti langkah-langkah dibawah ini.