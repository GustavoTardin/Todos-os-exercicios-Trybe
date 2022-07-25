// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

// Voce basicamente cria uma função com um teste, para verificar se o nome do array é x por exemplo, e após isso, coloca array.find(nomeDaFuncaoAcima).

//O indicado é colocar dentro de uma constante esse resultado para ficar salvo, pois como dito anteriormente o find não altera valores.

const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cherries' );

//console.log(result) // { name: 'cherries', quantity: 5 }

//Também existe uma forma de não precisar criar uma função separada, e sim colocar na mesma linha como um arrow function depois do find, como o exemplo abaixo:

const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven2 = numbers.find((number) => number % 2 === 0);
//console.log(isEven2); // 30

const numbers2 = [19, 15, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
return number % 3 === 0 && number % 5 === 0
}

const div = numbers2.find(findDivisibleBy3And5);

//console.log(div);


const names = ['Joãoo', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  return nome.length === 5;
}

//console.log(names.find(findNameWithFiveLetters));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: ' 31031685', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.id ===  31031685;
  }
  
  console.log(musicas.find(findMusic))