let numero = 5

if(numero > 0) {
    console.log("Positivo");
} else if(numero < 0){
console.log("Negativo");    
} else {
    console.log("zero");
}

let angulo1 = 90;
let angulo2 = 9;
let angulo3 = -3;
let somaDosAngulos = angulo1 + angulo2 + angulo3;
let AngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;



if(AngulosPositivos){
 if(somaDosAngulos === 180) { 
    console.log(true);
 } else {
    console.log(false);
 };
} else {
    console.log('inválido')
}