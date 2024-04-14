var jmlhAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var angkotLembur = 8;

for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No: " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === angkotLembur) {
    console.log("Angkot No: " + noAngkot + " Sedang Lembur");
  } else {
    console.log("Angkot no: " + noAngkot + "Sedang tidak beroperasi");
  }
}
