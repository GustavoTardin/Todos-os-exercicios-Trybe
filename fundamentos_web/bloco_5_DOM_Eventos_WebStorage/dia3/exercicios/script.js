

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDezembro() {
  let ul = document.getElementById("days");
  for (let index in decemberDaysList) {
    const dia = decemberDaysList[index];
    const mes = document.createElement('li');
    mes.innerHTML = dia;

    if (dia === 24 || dia === 31) {
      mes.className = "day holiday";
      ul.appendChild(mes);
    } else if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      mes.className = " day friday";
      ul.appendChild(mes);
    } else {
      mes.className = "day";
      ul.appendChild(mes);
    }
  }
}
diasDezembro();

const divBotao = document.getElementsByClassName("buttons-container")[0];

function Feriados(string) {
  const botao = document.createElement("button");
  botao.innerHTML = string;
  botao.id = "btn-holiday";
  divBotao.appendChild(botao);
}
Feriados("Feriados");

const button = document.getElementById("btn-holiday");
button.addEventListener("click", mudaCor);

function mudaCor(event) {
  let feriados = document.querySelectorAll('.holiday');
  let corAtual = 'rgb(238,238,238)';
  let setNewColor = 'red';

  for (let index = 0; index < feriados.length; index += 1) {
    console.log(feriados[index])
    if (feriados[index].style.backgroundColor === setNewColor) {
      feriados[index].style.backgroundColor = corAtual;
    } else {
      feriados[index].style.backgroundColor = setNewColor
    }
  }
}
mudaCor();



function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');

