const base = 60;
const esquerda = 60;
const direita = 60;
let triangulo = base + direita + esquerda;

if(triangulo === 180){
    console.log("True");
}
else if(triangulo < 0){
    console.log("Erro 401");
} else{
    console.log("False");
}

