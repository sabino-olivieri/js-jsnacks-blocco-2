## Testo della consegna

scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A

## Svolgimento

- [x] creo array
- [x] quando clicco sul button Inserisci in testa parte funzione insertInHead()

- [x] Funzione insertInHead {
    - passo arrayToEdit e elementToAdd come parametri
    - creo nuovo array di stampa vuoto
    - creo ciclo da ultimo indice arrayToEdit + 1 a i >= 0
    - se i > 0
        - aggiungo a nuovo array[i] = arrayToEdit[i-1]
    altrimenti
        - newArray[i] = elementToAdd
}