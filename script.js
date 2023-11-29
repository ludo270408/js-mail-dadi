//1.Esercizio della mail

//Array con mail autorizzate
const email_autorizzate=['luca@gmail.com', 'mario@gmail.com', 'giulia@gmail.com'];

//Chuedere la mail all'utente
let user_mail=prompt('Inserisca la sua e-mail:');

//variabile di controllo
let flag=false;

//controllare se la mail inserita dall'utente si trova all'interno dell'array 
for(let i=0; i>email_autorizzate.length; i++){
    // se laq trovo la variabile di controllo duventa vera
    if(email_autorizzate[i] == user_mail){
        flag=true;
    }
}

//Risposta: se la variabile è true la risposta è positiva, altrimenti non è autorizzata
if(flag ==true){
    console.log('La tua mail è autorizzata :)')
}
else{
    console.log('La tua mail NON è autorizzata, ci dispiace :(')
}

//2. Gioco dei dadi

 //Generare due numeri casuali (uno del computer e uno dedll'utente)
 let user_number= Math.floor(Math.random()*6+1);
 let computer_number=Math.floor(Math.random()*6+1);

 //Visualizziamo i numeri scelti
 console.log(user_number);
 console.log(computer_number);

 //Il programma ti dice il risultato: hai vinto, hai perso o hai pareggiato
 if(user_number>computer_number){
    console.log('Hai vinto complimenti! :)');
 }
 else if(user_number<computer_number){
    console.log('Oh no hai perso! :( ... La prossima volta sarai più fortunato');
 }
else{
    console.log('Colpo di scena! Avete pareggiato');
}