---
title: Cara Setting Hotspot di Mikrotik
date: 2023-11-05T15:41:12.592Z
summary: Mau buat wifi voucheran? Atau untuk manage bandwidth setiap user wifi?
  Gini caranya.
draft: false
tags:
  - hotspot
  - mikrotik
  - layer-3-protocol
  - dhcp
---
Hotspot di [mikrotik](/tags/mikrotik) adalah cara untuk mengamankan jaringan (biasanya jaringan wifi) supaya tidak bisa sembarang orang bisa connect. Hotspot juga cara mudah untuk membatasi penggunaan data atau quota untuk setiap user jaringan atau wif-fi.

## Kenapa Pakai Hotspot?

Hotspot biasanya digunakan oleh ISP dan RT/RW net untuk menjual wifi dengan system voucheran. Atau biasanya disebut `wifi-id ala ala.`

Dengan hotspot, pemilik jaringan bisa mengendalikan pengguna wifi secara bebas. Setiap pengguna bisa memiliki limitasi seperti bandwidth, quota, ataupun durasi maksimal koneksi.

## Setting Hotspot di Mikrotik

Dalam tutorial ini topologi kita seperti ini:

![topologi hotspot](/images/uploads/screenshot-from-2023-11-05-16-59-31.png "topologi")

Kita punya mikrotik yang sudah ada basic confignya yang terkoneksi dengan internet di interface Ether1. Kemudian di inteface Ether2 kita sambungkan kabel UTP ke arah komputer. Komputer ini akan menjadi pelanggan atau client hotspot kita.

## Setting Hotspot Server di Mikrotik

Mikrotik kita akan menjadi server hotspot dan sumber internet kita.

Mikrotik kita sudah ada basic confignya. Langsung kita buka winbox dan remote mikrotik.

### Pasang IP Address di Interface Ether2

Buka menu IP di sidebar winbox.

![seleksi menu ip di winbox](/images/uploads/ip-menu.png "menu ip")

Buka menu address

![buka ip address menu](/images/uploads/ip-address-menu.png "ip address menu")

Klick `+`

![ip address add](/images/uploads/ip-address-add.png "add ip address")

### Tambah IP Address Bebas Dengan Segmen `/24` di Ether2

Kita tambah IP address bebas dengan segmen atau CIDR /24 di interface Ether2

> Ingat, gunakan ip addresss local atau private.

![add ip 192.168.10.1/24 to ether2](/images/uploads/add-ip-192.168.10.1-24-to-ether2.png "add ip")

### Tambah DHCP Server di Ether2

Supaya Hotspot berjalan router kita harus menyediakan layanan DHCP ke arah interface yang sama. Makanya kita harus tambahkan DHCP server ke Ether2

Buka menu IP.

![](/images/uploads/ip-menu.png)

Kemudian buka menu DHCP server

![](/images/uploads/ip-dhcp-server.png)

kemudian click dhcp setup

![](/images/uploads/dhcp-setup.png)

Pilih Ether2

![](/images/uploads/dhcp-setup-ether2.png)

Kemudian click next beberapa kali sampai selesai.

## Tambah Hotspot Server ke Ether2

Setelah kita tambah DHCP server kita bisa langsung setting server hotspot kita.

Buka menu IP.

![](/images/uploads/ip-menu.png)

Buka menu hotspot

![](/images/uploads/ip-hotspot-menu.png)

### Hotspot Setup

Di menu hotspot langsung kita click `Hotspot Setup`

![](/images/uploads/ip-hotspot-setup.png)

Pilih interface Ether2 sesuai topologi kita.

![](/images/uploads/hotspot-setup-ether2.png)

Kemudian kita click next beberapa kali sampai selesai

![](/images/uploads/hotspot-setup-next.png)

**Penting: Jangan pasang DNS name. DNS name akan membuat hotspot kita tidak muncul di handphone modern seperti iPhone.**

![](/images/uploads/dns-name-hotspot-warning.png)

## Tambah User Hotspot

Supaya pelanggan atau client hotspot kita bisa connect ke hotspot kita. Kita harus punya username dan password yang akan digunakan user untuk koneksi ke jaringan atau internet kita.

Kita langsung buka menu users di hotspot. Kemudian kita click `+` untuk menambah user baru.

![](/images/uploads/screenshot-from-2023-11-05-18-18-32.png)

Kemudian kita tambah user dan password bebas. kali ini kita gunakan username `testing` dan password `testing12345`

## Koneksi Client ke Hotspot

Kita langsung buka komputer kita yang tersambung ke mikrotik kita.

Kemudian kita masukkan username dan password yang kita buat tadi.

![](/images/uploads/screenshot-from-2023-11-05-18-28-23.png)

Setelah itu kita lihat komputer kita bisa connect

![](/images/uploads/screenshot-from-2023-11-05-18-31-41.png)

\
Itu tandanya settingan hotspot kita sudah berhasil