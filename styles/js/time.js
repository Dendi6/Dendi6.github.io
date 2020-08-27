const myDate = new Date();
const hrs = myDate.getHours();
const yyyy = myDate.getFullYear(); //tahun

const sapa = (x) => {
    let greet;

    if (x < 9)
        greet = 'Selamat Pagi';
    else if (x >= 9 && x < 15)
        greet = 'Selamat Siang'
    else if (x >= 15 && x < 18)
        greet = 'Selamat Sore';
    else if (x >= 18 && x <= 24)
        greet = 'Selamat Malam';
    
    return greet;
}

console.log(sapa(hrs));

const tahun = document.querySelector("#year_now");
tahun.innerHTML = yyyy;