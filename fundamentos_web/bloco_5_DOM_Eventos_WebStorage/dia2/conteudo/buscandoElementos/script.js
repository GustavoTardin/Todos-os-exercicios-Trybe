const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'red';

    const primeiroFilhoDoFilhos = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilhos.innerHTML = "Gustavo é lindo";

  const primeiroFilho = pai.firstElementChild;

  const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

  const atencao = elementoOndeVoceEsta.nextSibling;

  const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

  const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let quintoFilho = document.createElement('h1');
quintoFilho.innerText = 'Minha namorada é linda';
quintoFilho.style.backgroundColor = 'red';
quintoFilho.style.color = 'green';
pai.appendChild(quintoFilho);

let filhoDoElemento = document.createElement('h3');
filhoDoElemento.innerText = 'Minha cidade é muito fria';
filhoDoElemento.style.color = 'green';
elementoOndeVoceEsta.appendChild(filhoDoElemento);

let filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
filhoDoPrimeiroFilhoDoFilho.innerText = 'Chocolate é muito bom';
primeiroFilhoDoFilhos.appendChild(filhoDoPrimeiroFilhoDoFilho);

filhoDoPrimeiroFilhoDoFilho = primeiroFilhoDoFilhos.firstElementChild
const terceiroFilho3 = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho3);

pai.removeChild(quartoEUltimoFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(primeiroFilho);

const segundoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoFilhoDoFilho.remove();