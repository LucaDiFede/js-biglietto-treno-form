const km = document.getElementById('km');
console.log('km', km, typeof km);

const età = document.getElementById('età');
console.log('età', età, typeof età);

const calcolaForm = document.querySelector('form');
console.log('calcola', calcola, typeof calcola);

calcolaForm.addEventListener('submit', function(event) {
    console.log('event', event, typeof event);
    event.preventDefault();

    console.log('km.value', km.value, typeof km.value);
    console.log('età.value', età.value, typeof età.value);

    const kmInNumber = parseInt(km.value);

    if (isNan(kmInNumber)) {
        alert('Valore Km Invalido');
    }
    else {

        const etàInNumber = parseInt(età.value);

        if (isNan(kmInNumber)) {
        alert('Valore Km Invalido');
        }

        else {

        let Prezzo = (kmInNumber * 0.21);

            if (etàInNumber < 18) {
            Prezzo *= 0.8;
            }

            else if (etàInNumber > 65) {
                Prezzo *= 0.6;
            }

            console.log('Prezzo', Prezzo, typeof Prezzo);

            Prezzo = Prezzo.toFixed(2);

            const resultContainer = document.querySelector('Risultato');
            console.log('resultContainer', resultContainer, typeof resultContainer);
            resultContainer.innerHTML = 'Prezzo' + Prezzo;

}
}});

/*const Prezzo = Km * 0.21;
console.log(Prezzo);

let Totale = Prezzo;
console.log(Totale);

if (età.value < 18) {
    const Min = Prezzo * 0.20;
    Totale = Prezzo - Min;
}

else if (età.value > 65) {
    const Mag = Prezzo * 0.40;
    Totale = Prezzo - Mag;
}

document.getElementById("Risultato").innerHTML = "Prezzo:" + Totale.toFixed(2) + "€";*/