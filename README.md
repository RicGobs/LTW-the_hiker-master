# LTW

The Hiker Official Demo Site by Marco Francomano &amp; Riccardo Gobbato


Il codice è suddiviso in 5 cartelle + una che contiene le librerie e i framework esterni salvati in locale (libs).
Ogni cartella contiene una pagina html del sito, il suo foglio di stile css e i vari script javascript e php legati a quella pagina.

-Start contiene start.html (la pagina Home), start.css, handlers.js (contenente le funzioni del pulsante logout) e scroll.js che contiene lo script per scrollare la navbar al movimento della rotella del mouse

-login contiene login.hmtl, login.css, pop.js(che contiene lo script per salvare email e categoria nella session storage) e validateLogin.php che serve ad autenticarsi lato backend.

-registrazione come login

-principiante contiene la pagina principiante.html per cercare i percorsi escursionistici,principiante.css,principiante.js che contiene i principali script dei bottoni per le richieste ajax e search.php e searchWithRegion.php che efettuano le ricerche nel database.

-esperto contiene esperto.html(la pagina per creare i percorsi), esperto.css, esperto.js (che contiene gli script dei bottoni e lancia la richiesta per la ricerca dei comuni on change della select della regione) comuni.php (che si occupa di trovare i comuni della regione inserita lato backend, validaDati.js(che contiene le funzioni principali per validare i dati da inserire) e create.php che inserisce il percorso nel database.

infine è presente la cartella img che contiene le immagini in locale.
