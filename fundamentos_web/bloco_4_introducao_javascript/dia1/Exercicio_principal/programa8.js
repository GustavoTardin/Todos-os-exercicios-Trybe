const altura = 1;
const largura = 3;
const raio = 5;
let isThereaOddNumber = "Pelo menos 1 é ímpar";

if((largura % 2 != 0 || altura % 2 != 0 || raio % 2 != 0)){
    console.log(isThereaOddNumber);
} else{
    console.log("Todos pares");
}
