var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("pilih : Gajah, Semut, Orang");

  // menagkap pilihan komputer
  //membangkitkan bilangan random
  var comp = Math.random();
  console.log(comp);

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  //menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = seri;
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "Menang";
    //   } else {
    //     hasil = "Kalah";
    //   }
    hasil = comp == "orang" ? "Menang" : "Kalahh";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "Menang" : "Kalah";
  } else if (p == "Semut") {
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else {
    hasil = "Anda Memasukkan Pilihan Yang salah";
  }

  //tampilkan hasilnya
  alert(
    "Kamu Memilih : " +
      p +
      " dan komputer memilih " +
      comp +
      "\nMaka Hasilnya : Kamu     " +
      hasil
  );

  tanya = confirm("lagi?");
}
alert("Terima Kasih?");
