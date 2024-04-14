var mhs = {
  nama: "djahwa",
  umur: "21",
  ips: [3.22, 3.43, 3.21],
  alamat: {
    jalan: "Jl Pipa",
    kota: " Palembang",
    profinsi: "sumsel",
  },
};

// Membuat Object
// Object Literal

var mhs1 = {
  nama: "Mgs Djahwa Haridsyah",
  nrp: "031200053",
  email: "djahwa@gmail.com",
  jurusan: "Sistem Informasi",
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs2 = buatObjectMahasiswa(
  "dika",
  "03123123123",
  "dika@phone.com",
  "informatika"
);

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa(
  "dika",
  "03123123123",
  "dika@phone.com",
  "informatika"
);
