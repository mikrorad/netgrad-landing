---
title: Lab Web Mikrotik GNS3 Bisa Remote Dengan Winbox
date: 2023-12-08T16:13:11.402Z
summary: Buat lab yang biasa digunakan oleh Ghibran Jaringan di tutorial
draft: false
tags:
  - mikrotik
  - remote-jarak-jauh
---
Di tutorial [Ghibran Jaringan](https://www.tiktok.com/@ghibran_jaringan) sering kali lab mikrotik dalam bentuk web digunakan. Web ini asalnya adalah GNS3 Web yang sudah di modifikasi supaya bisa di remote manggunakan Winbox supaya mudah digunakan. Modifikasi ini dilakukak oleh saya (ghibran jaringan) sendiri.

## Tutorial Install GNS3 Web Sebelumnya

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829" data-video-id="7271003638334573829" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@ghibran_jaringan" href="https://www.tiktok.com/@ghibran_jaringan?refer=embed">@ghibran_jaringan</a> Cara install gns3 di kompiter kalian pake virtualbox <a title="computer" target="_blank" href="https://www.tiktok.com/tag/computer?refer=embed">#computer</a> <a title="internet" target="_blank" href="https://www.tiktok.com/tag/internet?refer=embed">#internet</a> <a title="jaringan" target="_blank" href="https://www.tiktok.com/tag/jaringan?refer=embed">#jaringan</a> <a title="wireless" target="_blank" href="https://www.tiktok.com/tag/wireless?refer=embed">#wireless</a> <a title="gns3" target="_blank" href="https://www.tiktok.com/tag/gns3?refer=embed">#gns3</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="mikrotik" target="_blank" href="https://www.tiktok.com/tag/mikrotik?refer=embed">#mikrotik</a> <a title="tutorial" target="_blank" href="https://www.tiktok.com/tag/tutorial?refer=embed">#tutorial</a> <a title="edukasi" target="_blank" href="https://www.tiktok.com/tag/edukasi?refer=embed">#edukasi</a> <a title="tkj" target="_blank" href="https://www.tiktok.com/tag/tkj?refer=embed">#tkj</a> <a title="training" target="_blank" href="https://www.tiktok.com/tag/training?refer=embed">#training</a> <a title="mikrotik💪🤩" target="_blank" href="https://www.tiktok.com/tag/mikrotik%F0%9F%92%AA%F0%9F%A4%A9?refer=embed">#mikrotik💪🤩</a> <a title="pc" target="_blank" href="https://www.tiktok.com/tag/pc?refer=embed">#pc</a> <a title="laptop" target="_blank" href="https://www.tiktok.com/tag/laptop?refer=embed">#laptop</a> <a title="windows" target="_blank" href="https://www.tiktok.com/tag/windows?refer=embed">#windows</a> <a target="_blank" title="♬ original sound - Ghibran Jaringan" href="https://www.tiktok.com/music/original-sound-7271003708849916678?refer=embed">♬ original sound - Ghibran Jaringan</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

Sebenarnya di profile ghibran jaringan sudah dibuat [tutorial](https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829) yang panjang untuk membuat gns3 web ini dari awal atau *from scratch.* Tetapi dari comment video tersebut ternyata masih banyak orang yang belum berhasil menginstall GNS3 sampai selesai.

## Tutorial Baru

Tutorial ini akan lebih mudah dari sebelumnya. Ini dikarenakan di tutorial ini akan disediakan virtual machine yang sudah *ready made* jadi pengguna hanya perlu download kemudian pengguna bisa segera gunakan GNS3 Web nya.

Ayo kita langsung mulai saja.

### 1. Download Gns3 Web Virtual Machine Image

[Klik disini](https://drive.google.com/file/d/12YSOH_iFpJvNcKnA8SyAiTyQN9dqilUr/view?usp=sharing) untuk download image virtual box 

![download link di google drive](/images/uploads/screenshot-from-2023-12-08-17-44-52.png "download google drive")

Langsung klik download. Kemudian bakal muncul popup download file dengan nama `gns3.7z`

![download popup](/images/uploads/screenshot-from-2023-12-08-17-43-04.png)

## 2. Extract 7z

Extract file `gns3.7z` menggunakan program seperti Winrar atau 7zip.

## 3. Install Virtual Box

Di [tutorial sebelumnya](https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829) sudah ada bagian dimana cara cara install Virtualbox Dijelaskan.

Singkatnya kalian harus download virtualbox [disini](https://www.virtualbox.org/wiki/Downloads).
Kemudian click windows host 

![windows host  screenshot](/images/uploads/screenshot-from-2023-12-08-17-53-35.png)

