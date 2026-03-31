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
        alert('Parola non identificata');
        return false;
    } else {
        // Divide in un array con tutti i caratteri
        const caratteri = parola.toLowerCase().split("");
        for (i = 0, j = caratteri.length - 1; i < caratteri.length - 1, j > 0; i++, j--) {
            //Per ogni carattere specchiato, controlla se è uguale
            if (caratteri[i] !== caratteri[j]) {
                alert('Non un palindromo');
                console.log('Non palindromo');
                return false;
            } else {
                alert("E' un palindromo!");
                console.log('Palindromo');
                return true;
            }
        }
    }
}

const parolaInput = prompt('Inserisci la parola');
const checkResult = palindromoCheck(parolaInput);

