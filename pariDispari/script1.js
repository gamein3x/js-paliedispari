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


// Creo una funzione per controllare che l'utente abbia inserito "pari" o "dispari" all'inizio del ciclo
function winCondCheck(par) {
    return par === "pari" || par === "dispari";
}

// Funzione per numero random da 1 a 5
function random5() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per controllo se numero finale è pari o dispari
function isEven(num) {
    return num % 2 === 0;
}

const inputWinCond = prompt('Scrivi "Pari" o "Dispari" per scegliere').toLowerCase();

if (!winCondCheck(inputWinCond)) {
    alert('Devi scrivere "pari" o "dispari". Ricarica la pagina e riprova.');
} else {
    const inputNum = parseInt(prompt("Scegli un numero da 1 a 5"));

    // controllo numero valido
    if (isNaN(inputNum) || inputNum < 1 || inputNum > 5) {
        alert("Devi inserire un numero tra 1 e 5. Ricarica e riprova.");
    } else {
        const CPUNum = random5();
        const sum = CPUNum + inputNum;
        const sumIsEven = isEven(sum);
        const result = sumIsEven ? "pari" : "dispari";

        alert(
            `Hai scelto ${inputWinCond}, tu hai giocato ${inputNum}, il computer ${CPUNum}. La somma è ${sum} ed è ${result}.`
        );

        if (result === inputWinCond) {
            alert("Hai vinto!");
        } else {
            alert("Hai perso!");
        }
    }
}