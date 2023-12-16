---
title: Pengen Banget Belajar Mikrotik tapi Gak Punya? Coba GNS3 Web
date: 2023-12-08T16:13:11.402Z
summary: Cara install web GNS3 buat belajar mikrotik tanpa harus beli mikrotik.
draft: false
tags:
  - mikrotik
  - remote-jarak-jauh
---
Di tutorial [Ghibran Jaringan](https://www.tiktok.com/@ghibran_jaringan) sering kali lab mikrotik dalam bentuk web digunakan. Web ini asalnya adalah GNS3 Web yang sudah di modifikasi supaya bisa di remote manggunakan Winbox supaya mudah digunakan. Modifikasi ini dilakukak oleh saya (ghibran jaringan) sendiri.

## GNS Web

GNS3 Web adalah interface GNS3 yang bisa dibuka menggunakan browser. 
Dibawah ini adalah beberapa screenshot GNS3 Web:

![](/images/uploads/screenshot-from-2023-12-08-20-38-08.png)

Bisa dilihat, menggunakan GNS3 kita bisa bereksperimen dengan jaringan kompleks tanpa harus memiliki alat jaringan atau Mikrotik sama sekali.

## Tutorial Install GNS3 Web Sebelumnya

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829" data-video-id="7271003638334573829" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@ghibran_jaringan" href="https://www.tiktok.com/@ghibran_jaringan?refer=embed">@ghibran_jaringan</a> Cara install gns3 di kompiter kalian pake virtualbox <a title="computer" target="_blank" href="https://www.tiktok.com/tag/computer?refer=embed">#computer</a> <a title="internet" target="_blank" href="https://www.tiktok.com/tag/internet?refer=embed">#internet</a> <a title="jaringan" target="_blank" href="https://www.tiktok.com/tag/jaringan?refer=embed">#jaringan</a> <a title="wireless" target="_blank" href="https://www.tiktok.com/tag/wireless?refer=embed">#wireless</a> <a title="gns3" target="_blank" href="https://www.tiktok.com/tag/gns3?refer=embed">#gns3</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="mikrotik" target="_blank" href="https://www.tiktok.com/tag/mikrotik?refer=embed">#mikrotik</a> <a title="tutorial" target="_blank" href="https://www.tiktok.com/tag/tutorial?refer=embed">#tutorial</a> <a title="edukasi" target="_blank" href="https://www.tiktok.com/tag/edukasi?refer=embed">#edukasi</a> <a title="tkj" target="_blank" href="https://www.tiktok.com/tag/tkj?refer=embed">#tkj</a> <a title="training" target="_blank" href="https://www.tiktok.com/tag/training?refer=embed">#training</a> <a title="mikrotik💪🤩" target="_blank" href="https://www.tiktok.com/tag/mikrotik%F0%9F%92%AA%F0%9F%A4%A9?refer=embed">#mikrotik💪🤩</a> <a title="pc" target="_blank" href="https://www.tiktok.com/tag/pc?refer=embed">#pc</a> <a title="laptop" target="_blank" href="https://www.tiktok.com/tag/laptop?refer=embed">#laptop</a> <a title="windows" target="_blank" href="https://www.tiktok.com/tag/windows?refer=embed">#windows</a> <a target="_blank" title="♬ original sound - Ghibran Jaringan" href="https://www.tiktok.com/music/original-sound-7271003708849916678?refer=embed">♬ original sound - Ghibran Jaringan</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

Sebenarnya di profile ghibran jaringan sudah dibuat [tutorial](https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829) yang panjang untuk membuat gns3 web ini dari awal atau *from scratch.* Tetapi dari comment video tersebut ternyata masih banyak orang yang belum berhasil menginstall GNS3 sampai selesai.

## Tutorial Baru

Tutorial ini akan lebih mudah dari sebelumnya. Ini dikarenakan di tutorial ini akan disediakan virtual machine yang sudah *ready made* jadi kalian hanya perlu download kemudian kalian bisa segera gunakan GNS3 Web nya.

Ayo kita langsung mulai saja.

### 1. Download Gns3 Web Virtual Machine Image

<iframe src="https://drive.google.com/embeddedfolderview?id=1PKwBs20VBE7-TlLLZzS6BYjeJlfMnfWA#list" style="width:100%;height: 81px;border:0;" scrolling="no"></iframe>

Langsung click file `gns3.7z` diatas, atau [klik disini](https://drive.google.com/file/d/12YSOH_iFpJvNcKnA8SyAiTyQN9dqilUr/view?usp=sharing) untuk download image virtual box 

![download link di google drive](/images/uploads/screenshot-from-2023-12-08-17-44-52.png "download google drive")

Langsung klik download. Kemudian bakal muncul popup download file dengan nama `gns3.7z`

![download popup](/images/uploads/screenshot-from-2023-12-08-17-43-04.png)

### 2. Extract 7z

Extract file `gns3.7z` menggunakan program seperti Winrar atau 7zip. Ketika kalian *extract* file `gns3.7z` akan mengeluarkan file di dalamnya yaitu `ubuntu.vdi`. Ini akan kita gunakan nanti.

### 3. Install Virtual Box

Di [tutorial sebelumnya](https://www.tiktok.com/@ghibran_jaringan/video/7271003638334573829) sudah ada bagian dimana cara cara install Virtualbox Dijelaskan.

Singkatnya kalian harus download virtualbox [disini](https://www.virtualbox.org/wiki/Downloads).
Kemudian click windows host.

![windows host  screenshot](/images/uploads/screenshot-from-2023-12-08-17-53-35.png)

Kemudian kalian bisa install seperti program biasa.

### 4. Buka VirtualBox

Setelah kalian install virtualbox di komputer kalian, kalian bisa buka.
Setelah kalian tambah virtual machine baru dengan click tombol new

![](/images/uploads/frame-15-1-.png)

### 5. Install Virtual Machine GNS Web

Namakan Virtual machine kalian sesuka hati, di tutorial ini virtual machine akan dinamakan gns3.

Kemudian langsung click next

![namakan vm ](/images/uploads/screenshot-from-2023-12-08-18-16-02.png)

Kemudian Kalian harus beri virtual machine ini RAM dan CPU. Supaya GNS3 jalan dengan lancar gunakan RAM sebanyak 6GB dan CPU sebanyak 3 core.

Kemudian click next

![](/images/uploads/screenshot-from-2023-12-08-18-18-19.png)

### 6. Pilih Disk Image GNS3 `ubuntu.vdi` Hasil extract.

Pertama kalian click *icon* folder di kanan

![](/images/uploads/frame-16.png)

Kemudian click add

![](/images/uploads/frame-17.png)

Lalu cari dan pilih file `ubuntu.vdi` yang kalian extract tadi.

![](/images/uploads/screenshot-from-2023-12-08-18-28-16.png)

Setelah kalian pilih. langsung click next aja.

### 7. Finish

Setelah itu kalian bisa langsung click finish. 

### 8. Setting tambahan

Sebelum kalian mulai gunakan GNS3 kalian harus setting network VM supaya bisa di akses oleh komputer kalian.

Pilih VM gns3 kalian kemudian click settings.

![](/images/uploads/frame-18.png)

Kemudian pilih Network kemudian ganti dropdown `NAT` menjadi `Bridged Adapter`

![](/images/uploads/frame-19.png)

Kemudian supaya kalian bisa buka gns3 kalian harus enable virtualisasi di dalam VM kalian.

Buka menu system, processor di settings. kemudian centang `Enable Nested VT-x/AMD-v`

![](/images/uploads/frame-23.png)

### 9. Langsung Mulai dan Gunakan GNS3 Web

Kalian bisa langsung click start dan gunakan GNS3 Web sesuka kalian.

### 10. Cara Gunakan GNS3 Web

Kalian bisa langsung buka IP dari virtual machine kalian di browser kalian.
Untuk mengetahui IP dari Virtual machine kalian kalian bisa buka dhcp lease di router  kalian.

![](/images/uploads/frame-20.png)

Langsung buka di browser dengan link `http://[ip gns3]`

Kemudian untuk tambah router kalian bisa click + diatas kemudian drag and drop mikrotik yang kalian inginkan.

Kemudian kalian bisa gunakan GNS3 seperti Ghibran Jaringan di Tiktok.

### 11. Remote Mikrotik di GNS3 Menggunakan Winbox

Pertama kalian harus sambungkan mikrotik dengan cloud `internet`

![](/images/uploads/screenshot-from-2023-12-08-20-06-17.png)

Kemudian masukkan IP gns3 kalian ke winbox menggunakan username `tiktok` password kosong kemudian click **CONNECT TO ROMON**

![](/images/uploads/frame-21.png)

Setelah itu kalian bisa pilih router kalian di menu `ROMON Neighbour`. Kemudian dengan username `tiktok` dan password kosong, kalian bisa langsung remote Mikrotik yang ada  di simulasi.

![](/images/uploads/frame-22.png)

### 11. Login ke Virtual Machine
untuk login ke dalam shell ubuntu virtual machine gunakan username dan password dibawah:
username: ghibran
password: ghibran123

Setelah kalian login kalian bisa lihat ip dari virtual machine tersebut.