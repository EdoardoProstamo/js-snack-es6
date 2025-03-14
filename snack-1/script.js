// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


//PROCEDIMENTO
// - creare gli oggetti nell'html
//      - attribuire delle classi (o degli id) agli oggetti dell'html 
// - creare un array in js
//      -inserire gli oggetti
//           - attribuire le proprietà ad ogni oggetto
// - creare un if per stabilire quale oggetto ha il peso minore
// - utilizzando il risultato dell'if, prendere l'oggetto con il peso minore
// - stamparlo in console
// - stamparlo sullo schermo tramite html


const bicicletta = [
    {
        nome: 'bici 1',
        peso: '21'
    },
    {
        nome: 'bici 2',
        peso: '44'
    },
    {
        nome: 'bici 3',
        peso: '11'
    }
];

//accedo al valore all'interno dell'oggetto

//peso minore
let min = bicicletta[0]['peso'];
let minBici = bicicletta[0]; 

for (let i=1; i < bicicletta.length; i++) {
    const currentBici = bicicletta[i];

    if(min > currentBici.peso) {
        min = currentBici.peso;
        minBici = currentBici;
    }
}

console.log(min);
console.log(minBici);