# Esercizio

---

## Testo dell' Esercizio

1. Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

2. Bonus
- al click su una thumb, visualizzare in grande l'immagine corrispondente.
- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce.

---

## Algoritmo di svolgimento

- Creo variabile app al cui interno inseriro' nei data() tutto cio' che serve al mio programma e nei methods tutte le funzioni.

- Utilizzo v-for per iterare l' array contenente i dati sulle slide dal quale per ogni oggetto recupero percorso file, titolo e descrizione.

- Creo una variabile activeIndex che comparata al valore dell' index corrente durante l' iterazione con l' array mi permette di creare una condizione che possa farmi aggiungere allo slide corrente tramite class binding la classe per renderlo attivo e visualizzarlo in pagina.

- Utilizzo il solito algoritmo utilizzato per le slide per evidenziare la thumb della slide corrente.

- Applico autoplay assegnando un intervallo ad una variabile i quali parametri saranno la funzione per lo scorrimento alla prossima slide e il tempo di attesa.

- tramite v-on mouseover e mouseleave associo a over la funzione per interrompere l' autoslide composta dalla funzione di clearinterval che ha come parametro la variabile alla cui associamo l' intervallo, poi associo a leave una nuova funzione che resetta la variabile alla cui associamo l' intervallo.

---