const newEmployees = (empregados) => {
    const employees = {
      id1: empregados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: empregados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: empregados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const empregados = (fullName) => {
  const employer = {
    nome: fullName,
    email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`
  }
  return employer
}

console.log(newEmployees(empregados))
