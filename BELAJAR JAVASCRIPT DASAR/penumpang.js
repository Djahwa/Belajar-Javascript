var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di array
    penumpang.push(namaPenumpang);
    //kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        //kembalikan isi array dan keluar dari function
        return penumpang;
        //jika sudah ada nama yang sama
      } else if (penumpang[i] == namaPenumpang) {
        //cetak pesan kesalahan
        console.log("penumpang " + namaPenumpang + " sudah ada");
        //kembalikan isi array dan keluar dari function
        return penumpang;
      }
      //jika seluruh kursi terisi
      else if (i === penumpang.length - 1) {
        //tambhkan penumpang ke paling akhir
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan
    console.log("Angkot masih kosong. ");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else {
        console.log(namaPenumpang + " tidak ada");
        return penumpang;
      }
    }
  }
};
