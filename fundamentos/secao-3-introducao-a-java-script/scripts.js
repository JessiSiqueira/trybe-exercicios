let currentHour = 20;
let message = '';
if (currentHour <= 22) { 
    console.log("Não deveriamos comer nada, é hora de dormir");
} else if(currentHour >= 18 && currentHour < 22) {
    console.log("vamos jantar");
} else if(currentHour >= 14 && currentHour < 18) {
    console.log("vamos fazer um bolo para o café");
} else if(currentHour >= 11 && currentHour < 14) {
    console.log("hora do almoço");
} else if( currentHour <= 4 || currentHour <= 11) {
    console.log("hmmm, cheiro de café");
}
console.log(message)