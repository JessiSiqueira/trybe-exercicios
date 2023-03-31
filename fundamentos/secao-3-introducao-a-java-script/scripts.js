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

let peca = 'martelo';

switch(peca) { 
    case 'rainha':
    console.log('diagonal, horizontal e vertical');
    break;
    case 'martelo':
    console.log('isso não é uma peça de xadrez')
}

let numero1 = 4;
let numero2 = 3;
let numero3 = 8;

if(numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

let number1 = 4;
let number2 = 6;
let number3 = 8;

if(number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}

let salario = 3.000;

if (salario) {  
    let SalarioMenosINSS = salario - (salario * 11/100);
    let SalarioLiquido = SalarioMenosINSS - (SalarioMenosINSS * 0.075);
    console.log(SalarioLiquido)
}  

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}