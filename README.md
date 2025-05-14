# **Esercizio:** 

### Comandi da eseguire nel terminale per inizializzare il progetto dopo averlo scaricato (lato client):

Da terminale spostarsi sulla cartella di progetto ed eseguire il comando

    npm create vite@latest   

Aprire il progetto in VScode tramite il comando

    code .

Aprire il terminale in VScode ed esefuire i seguenti comandi

    npm install   
    npm install react-router-dom
    npm i axios

Per startare il client:

    npm run dev

## Consegna Day 1 - Setup Web App Express
Vedi README di webapp-express

---
## Consegna Day 2 - Setup Web App React 1/3

## MILESTONE 1
- Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

---
## MILESTONE 2
- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
- Creiamo 2 pagine:
    - La home, in cui mostreremo la lista dei film
    - La pagina di dettaglio di un singolo film

---
## MILESTONE 3
- Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware ``CORS``
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

---
### *Bonus*
- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
- Aggiungere, nella pagina dei film, un campo per cercare su tutti i campi utili del db (es. titolo, abstract)
- Curare l’aspetto estetico della vostra applicazione

---

## Consegna Day 3 - Setup Web App React 2/3

## MILESTONE 1
- Colleghiamo la lista dei movies a una pagina di dettaglio movie.
- Effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

---
## MILESTONE 2
- Rappresentiamo le informazioni del movie

---
## MILESTONE 3
- Creiamo un componente ReviewCard per rappresentare le informazioni delle recensioni

---
### *Bonus*
- Rappresentiamo tutti i voti delle recensioni con un componente ``StarRating``
### *Bonus Bonus*
- Sul backend, iniziamo a realizzare una rotta /movies/:id/reviews per aggiungere una nuova recensione.
Può restituire un semplice testo "Rotta per aggiungere una recensione"

---
## Consegna Day 4 - Setup Web App React 3/3

## MILESTONE FRONTEND
Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

---

