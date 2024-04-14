// Manipulasi Array

// 1. Menambahakan isi Array
// var arr = [];

// arr[0] = "djahwa";
// arr[1] = "dika";
// arr[2] = "dwa";

// console.log(arr);

// 2. Menghapus iis array
// var arr = ["djahwa", "andika", "bima"];
// arr[1] = undefined;

// console.log(arr);

// 3. Menampilkan Isi Array
var arr = ["djahwa", "andika", "andi", "doni", "bima"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah\n" + arr[i]);
// }

// 4. Methode pada array
// - join
// var arr = ["djahwa", "andika", "bima"];
// console.log(arr.join(""));

// - push & pop
// arr.push("dody");//push
// console.log(arr.join(""));
// arr.pop("");//pop
// console.log(arr.join(""));

// - unshift & shift
// arr.unshift("dody"); //unshift
// arr.shift(); //shift
// console.log(arr.join(""));

// - splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,.....)
// arr.splice(2, 2, "doody", "fitri");
// console.log(arr.join(" - "));

// - splice
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(" - "));

// - forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["djahwa", "andika", "andi", "doni", "bima"];

// angka.forEach(function (e) { //melooping semua isinya
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log(e + "adalah mahasiswa ke-" + (i + 1));
// });

// - map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// - sort
// var angka = [1, 2, 4, 7, 5, 6, 9, 30, 10];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// - filter
// var angka = [1, 2, 4, 7, 5, 6, 9, 30, 10];
// var angka2 = angka.filter(function (x) {
//   return x > 4;
// });
// console.log(angka2.join(" - "));

// - find
// var angka = [1, 2, 4, 7, 5, 6, 9, 30, 10];
// var angka2 = angka.find(function (x) {
//   return x > 4;
// });
// console.log(angka2);
