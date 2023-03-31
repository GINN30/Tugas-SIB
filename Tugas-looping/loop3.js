//looping untuk mengetahui ganjil & genap dari nilai 0-20
for (let j = 0; j <= 20; j++) {
    //pengkondisian dengan modulus 2 jike sama dengan 0 maka bilangan tersebut adalah bilangan genap
    if (j %2 === 0) {
        console.log(j + ' adalah bilangan genap')
    } else {
        console.log(j + ' adalah bilangan ganjil')
    }
}