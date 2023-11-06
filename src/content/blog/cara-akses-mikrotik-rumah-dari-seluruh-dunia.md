---
title: Cara Akses Mikrotik Rumah Dari Seluruh Dunia
date: 2023-11-07T16:33:04.896Z
summary: Mau bisa akses Mikrotik dari mana saja? mari ikuti caranya.
draft: false
tags:
  - remote-jarak-jauh
  - point-to-point
  - mikrotik
  - l2tp
---
Sebagai network administrator pasti sering terjadi situasi dimana kita harus akses dan remote mikrotik kita dari jarak jauh.

## Bagaimana Caranya?

Kita bisa gunakan VPN L2TP untuk bisa remote mikrotik kita dari jarak jauh.

L2TP atau Layer 2 Tunneling Protocol adalah protokol tunneling yang sering dikombinasikan dengan protokol keamanan lain seperti IPSec untuk membuat koneksi VPN yang sangat aman. L2TP menghasilkan tunnel antara dua titik koneksi .

## Kenapa L2TP?

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

**1. Masuk ke Tab IP > Firewall**

![](/images/uploads/screenshot-5-.png)

**2. Masuk ke Menu NAT dan klik +**

![](/images/uploads/screenshot-6-.png)

**3. Membuat Forwarding**

![](/images/uploads/screenshot-7-.png)

![](/images/uploads/screenshot-8-.png)

Mari kita perjelas disini pada Tab Forwarding nya.

\- dstnat : Memiliki fungsi untuk mengubah destination address pada sebuah paket data. Biasa digunakan untuk membuat host dalam jaringan lokal dapat diakses dari luar jaringan (internet) dengan cara NAT akan mengganti alamat IP tujuan paket dengan alamat IP lokal.

1. Chain > dstnat
2. Dst. Address > disesuaikan dengan IP Public yang kalian miliki
3. Protocol > TCP
4. Dst. Port > Port Tujuan (bebas untuk kalian tentukan sendiri)
5. Action > dst-nat
6. To Addresses > diisi dengan IP Remote Address yang kalian buat pada tab Secrets
7. To Ports: 8291 (port winbox)

Disini kita mengubah Port Winbox ke Port yang kita buat disini.

Contoh:

![](/images/uploads/screenshot-10-.png)

#### **Setting L2TP Client**

**1. Buka Menu PPP**

![](/images/uploads/screenshot-1-.png)

**2. Klik tanda + lalu klik L2TP Client**

![](/images/uploads/screenshot-11-.png)

**3. Tambah L2TP Client dan masuk ke Tab Dial Out**

![](/images/uploads/screenshot-12-.png)

1. Connect To: IP Public dari Mikrotik Server
2. User dan Password yang kita buat pada Tab Secrets di Mikrotik Server
3. Status: Connected (koneksi L2TP sudh berhasil)

Setelah itu kita uji coba untuk cara penggunaaannya.

![](/images/uploads/screenshot-10-.png)

![](/images/uploads/screenshot-13-.png)

Pada Tab Sessions bisa kalian lihat bahwa hasil dari Forwarding IP nya untuk membuka remote dengan metode L2TP sudah berhasil.