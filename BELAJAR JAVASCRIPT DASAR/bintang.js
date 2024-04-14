var s = "";
var spc = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}

for (var a = 9; a > 0; a--) {
  for (var b = 0; b < a; b++) {
    s += "*";
  }
  s += "\n";
}

//pagar
for (var p = 0; p < 10; p++) {
  for (var m = 0; m <= 10; m++) {
    if (p % 2 === 0) {
      s += "# ";
    } else {
      s += " #";
    }
  }
  s += "\n";
}

for (var q = 0; q < 10; q++) {
  for (var w = 0; w <= q; w++) {
    s += "*";
  }

  for (var e = 10; e >= 0; e--) {
    spc += "3";
  }

  if (w <= q) {
    console.log(s + spc);
  } else {
    console.log(s + spc);
  }
  s += "\n";
}
console.log(s);
