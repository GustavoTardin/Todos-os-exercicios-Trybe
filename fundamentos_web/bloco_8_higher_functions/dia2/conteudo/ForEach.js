// For each é uma hof que recebe obrigatoriamente m parametro, e tem 2 opcionais.

//Esse primeiro é o elemento em si, o array[index], o segundo é em qual posição no array ele está(0, 1, 2, etc). 

// Já o terceiro é o tamanho total do array, o array.length

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach(showEmailList);

