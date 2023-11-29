//Esercizio della mail

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