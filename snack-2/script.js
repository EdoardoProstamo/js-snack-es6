// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadra = [
    {
        nome: 'Inter',
        pt: '0',
        fouls: '0'
    },
    {
        nome: 'Juventus',
        pt: '0',
        fouls: '0'
    },
    {
        nome: 'Milan',
        pt: '0',
        fouls: '0'
    },
    {
        nome: 'Roma',
        pt: '0',
        fouls: '0'
    },
    {
        nome: 'Lazio',
        pt: '0',
        fouls: '0'
    },
    {
        nome: 'Catania',
        pt: '0',
        fouls: '0'
    }
];

//generare numeri random per punti e falli

for (let i=0; i < squadra.length; i++) {

    const currentSquad = squadra[i];
    
    currentSquad.pt = Math.floor(Math.random() * 100);
    currentSquad.fouls = Math.floor(Math.random() * 100);
}

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const result = [];

for (let i=0; i < squadra.length; i++) {

    const currentSquad = squadra[i];
}