var angka = Math.floor(Math.random() * 10) + 1;
var hasil = "";
var lagi = true;

alert("Tebak Angka dari 1 - 10 \n Kamu memiliki 3 Kesempatan");
while (lagi) {
  for (var i = 3; i > 0; i--) {
    var tebakan = prompt(" Masukkan Angka Berapa : ");
    var ks = i - 1;

    if (tebakan == angka) {
      alert("Benar Nilai sama !! \n nilai yang dicari adalah " + angka);
      break;
    } else if (tebakan < angka) {
      alert("Nilai Terlalu rendah \n Kesempatan sisa " + ks + " Lagi");
    } else {
      alert("Nilai Terlalu Tinggi \n Kesempatan sisa " + ks + " Lagi");
    }

    if (ks == 0) {
      alert("Anda Gagal\nAngka yang dicari adalah : " + angka);
    }
  }
  lagi = confirm("apakah mau lagi?");
}
alert("Terima Kasih");
