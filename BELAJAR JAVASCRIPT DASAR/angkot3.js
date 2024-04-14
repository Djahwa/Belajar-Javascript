var jmlhAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No: " + noAngkot + " Beroperasi dengan baik");
  } else {
    console.log("Angkot No: " + noAngkot + " Sedang tidak beroperasi");
  }
}
