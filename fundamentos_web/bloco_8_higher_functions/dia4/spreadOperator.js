// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['goiaba', 'pocã', 'abacaxi'];

const fruitSalad = (fruit, additional) => {
   const healthyFoods = [...fruit, ...additional];

   return healthyFoods;
};

console.log(fruitSalad(specialFruit, additionalItens));