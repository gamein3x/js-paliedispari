`use strict`;

/// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//- Creo due variabili che contengano i prompt dell'user e trasformino in interi;
//- Creo una funzione per generare un numero da 1 a 5 per la CPU;
//- Sommo e controllo il risultato con modulo



function winCondCheck() {
    if 
}

function random5() {
    return Math.floor(Math.random() * 5) + 1;
}

const inputWinCond = prompt('Scrivi "Pari" o "Dispari" per scegliere');
const inputNum = parseInt(prompt('Scegli un numero da 1 a 5'));
const CPUNum = random5();

const sum = CPUNum + inputNum;