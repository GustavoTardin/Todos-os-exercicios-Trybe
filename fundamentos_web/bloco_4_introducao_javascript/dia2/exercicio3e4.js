let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
let mediaAritmetica = 0
let r

for(let index = 0;index < numbers.length;index += 1){
    resultado += numbers[index];
    mediaAritmetica = resultado / numbers.length
}
console.log(mediaAritmetica)
if(mediaAritmetica > 20){
    console.log("Maior que 20")
} else{
    console.log("menor que 20");
}




    