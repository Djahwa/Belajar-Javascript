var jmlhAngkot = prompt('Berapakah Jumlah Angkot Anda ??');
var angkotBeroperasi = prompt('Berapa Jumlah Angkot yang beroperasi');
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No: ' + noAngkot + ' Beroperasi dengan baik');
    noAngkot++;
}
for(angkotBeroperasi; angkotBeroperasi <= jmlhAngkot; angkotBeroperasi++){
    console.log('Angkot No: ' + angkotBeroperasi + ' Sedang tidak beroperasi');
}