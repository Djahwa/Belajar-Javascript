// Membuat Object

// cara 1 - function declaration
// function halo() {
// console.log(this);
//   console.log("halo");
// }
// halo();
// this mengebalikan object global

//cara 2 - object literal
var obj = {};
obj.halo = function () {
  console.log(this);
  console.log("halo");
};
obj.halo();
//this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
new Halo();
// this mengembalikan objek yang baru dibuat
