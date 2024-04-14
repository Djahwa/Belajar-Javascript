var item = prompt(
  "masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, humberger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("Makanan / Minuman sehat");
    break;
  case "humberger":
  case "softdrink":
    alert("Makanan / Minuman tidak sehat");
    break;
  default:
    alert("anda memasukkan makanan yang salah");
    break;
}
