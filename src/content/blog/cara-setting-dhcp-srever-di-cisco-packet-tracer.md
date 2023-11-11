---
title: Cara Setting DHCP Server Di Cisco Packet Tracer
date: 2023-11-08T16:58:19.165Z
summary: Ingin tahu tahu cara setting dhcp server di cisco? klik link ini
draft: false
tags:
  - dhcp
  - cisco
  - layer-3-protocol
---
### Pengertian DHCP

DHCP adalah singkatan dari Dynamic Host Configuration Protocol. DHCP adalah protokol yang digunakan untuk distribusi IP Address pada jaringan komputer secara dinamis dan otomatis. Dengan menggunakan DHCP Anda dapat melakukan konfigurasi IP address pada setiap perangkat di jaringan komputer secara otomatis.

### Kenapa harus menggunakan DHCP?

DHCP akan memberikan kemudahan bagi seorang network administrator dalam mengelola jaringan komputer, karena alokasi IP Address dapat di tentukan secara otomatis dan tidak perlu mengkonfigurasi IP secara manual di sisi client.

### 1.Topologi jaringan

Sebelum kita melakukan konfigurasi DHCP Server, kita atur topologi di Cisco Packet Tracer menjadi seperti berikut ini.

![](/images/uploads/img_20231106_220659.jpg)

**Noted: Router dan switch bebas tipe apa aja**

### 2.Konfigurasi IP Address Router

Kita atur terlebih dahulu IP address pada interface Gig0/0 (yang terhubung ke arah switch/client)Router dengan cara klik Router, kemudian pilih tab CLI dan masukkan perintah berikut ini..

![](/images/uploads/img_20231107_194632.jpg)

![](/images/uploads/img_20231106_221712.jpg)

### 3.konfigurasi DHCP Server Router

Selanjutnya kita akan melakukan konfigurasi DHCP Server Router dengan ketentuan sebagai berikut.

* Gateway: 192.168.10.1
* DNS Server : 192.168.10.1
* Network: 192.168.10.0/24

Klik Router, pilih tab CLI, dan masukan perintah berikut ini

![](/images/uploads/img_20231106_222710.jpg)

### 4. Konfigurasi IP address PC client

Kita telah melakukan konfigurasi DHCP Server di router. Selanjutnya kita akan mengkonfigurasi IP address di PC client menjadi DHCP Client, sehingga PC client akan mendapatkan IP address otomatis dari Router.

Klik pada PC kemudian klik tab Desktop, pilih IP Configuration.

![Tes](/images/uploads/img_20231107_194505.jpg)

![](/images/uploads/gridart_20231106_223555081.jpg)

### 5.Pengetesan Ping PC ke router

Kita lakukan pengetesan koneksi dengan melakukan test ping dari PC0 ke Router.

 Klik pada PC0, klik tab Desktop, dan pilih Command Prompt.

![](/images/uploads/img_20231106_224434.jpg)

  Terima kasih telah membaca artikel ini.