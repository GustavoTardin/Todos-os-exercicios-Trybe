let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0

//console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]);

for(let index = 0;index < numbers.length;index += 1){
    resultado += numbers[index]
}
console.log(resultado);
