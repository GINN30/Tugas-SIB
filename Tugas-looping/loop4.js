//deklarasi variable hitung
var hitung = 0

//menggunakan while looping untuk menyelesaikan masalah
while (true) {
    //pengkondisian variable sesuai soal
    var hasil = confirm('Apakah Anda Mau Mengulang ?')

    //looping untuk menyelesaikan masalah soal
    if (hasil) {
        hitung++ //jika user memilih OK
    } else {
        //menggunakan alert untuk memperingatkan user perulangan yang sudah dilakukan
        alert("perulangan sudah dilakukan sebanyak" + hitung + "kali")
        break
    }
}