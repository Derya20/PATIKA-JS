let names = prompt("İsminizi giriniz");
let adName = document.querySelector("#myName")
adName.innerHTML = names;

let clock = document.querySelector("#myClock")


//gün bilgisini sayısal alır ve gun fonksiyonuna verir
let date = new Date().getDay().toLocaleString('tr-TR');

function tekrar() {
    clock.innerHTML = saat() + "." + dakika() + "." + saniye() + " " + gun(date);
}
setInterval(tekrar, 1000);

function saat() {
    
    return  new Date().getHours().toLocaleString('tr-TR');

}
function dakika() {
    
    return new Date().getMinutes().toLocaleString('tr-TR');
}
function saniye() {

       return new Date().getSeconds().toLocaleString('tr-TR');
   
}

function gun(date) {
    let gun0 = "";
    switch (parseInt(date)) {
        case 1:
            gun0 = "Pazartesi"
            break;
        case 2:
            gun0 = "Salı"
            break;
        case 3:
            gun0 = "Çarşamba"
            break;
        case 4:
            gun0 = "Perşembe"
            break;
        case 5:
            gun0 = "Cuma"
            break;
        case 6:
            gun0 = "Cumartesi"
            break;
        case 7:
            gun0 = "Pazar"
            break;
    }
    return gun0;
}