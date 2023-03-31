//deklarasi variable awal
var jawab = ''

//menggunakan loop while untuk menyelesaikan soal
while (jawab !== 'Impact Byte') {
    jawab = prompt("Sebutkan Kepanjangan dari IB ( Impact Byte) ?")

    //perulangan if else
    if (jawab === 'Impact Byte') {
        alert('Selamat jawaban kamu benar');
      } else {
        alert('Jawaban kamu salah, coba lagi!');
      }
}
