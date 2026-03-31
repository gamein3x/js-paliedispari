`use strict`;

/// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//- Creo una funzione per verificare il palindromo, da legare al prompt;
//- La funzione deve ritornare "false" se :
//      -Inserisci un carattere che non sia una lettera (inclusi spazi);
//- La funzione deve:
//      -Convertire lettere maiuscole in minuscole;
//      -Dividere la stringa in un array che contiene tutte le lettere della parola;
//      -Leggere l'array a contrario e verificare che corrisponda all'array in ordine;
//      -Ritornare true se non corrisponde e false se corrisponde;

function palindromoCheck(parola) {
    // Controlla se la parola è una stringa
    if (typeof parola !== 'string' || parola === null) {
        return false;
    }
    // Divide in un array con tutti i caratteri
    const caratteri = parola.toLowerCase().split("");

    for (i=0, j=caratteri.length -1; i<caratteri.length -1, j>0; i++, j--) {
        //Per ogni carattere specchiato, controlla se è uguale
        if (caratteri[i] !== caratteri[j]) {
            return false;
        } else {
            return true;
        }
    }
}

/// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.,
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).,
// Sommiamo i due numeri,
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione),
// Dichiariamo chi ha vinto.