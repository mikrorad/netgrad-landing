---
title: Cara Setting Hotspot di Mikrotik
date: 2023-11-05T15:41:12.592Z
summary: Mau buat wifi voucheran? Atau untuk manage bandwidth setiap user wifi?
  Gini caranya.
draft: false
tags:
  - hotspot
  - mikrotik
  - layer-3
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

### Tambah IP Address Bebas Dengan Segmen `/24`

``