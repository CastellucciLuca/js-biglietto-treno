const kiloMetres = parseFloat(prompt("Quanta distanza devi percorrere?")); 

const personAge = parseInt(prompt("Che età hai?"));

document.getElementById('km').innerHTML = kiloMetres + 'km';
document.getElementById('eta').innerHTML = personAge + '';

let ticketPrice = kiloMetres *0.21;

let ticketUnder = ticketPrice - (ticketPrice * 0.21);
let ticketOver = ticketPrice - (ticketPrice * 0.39);

if (personAge <= 18) {
    document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è di  : &euro; ' + ticketUnder.toFixed(2)
} else if (personAge >= 65){
    document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è di : &euro; ' + ticketOver.toFixed(2)
} else {
    document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è di : &euro;' + ticketPrice.toFixed(2)

}