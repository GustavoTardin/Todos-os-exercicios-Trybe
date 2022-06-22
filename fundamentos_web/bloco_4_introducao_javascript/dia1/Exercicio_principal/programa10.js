const custoDoProduto = 10;
const custoTotal = custoDoProduto * 1.2;
const valorDeVenda = 20;
let lucro = valorDeVenda - custoTotal;

if(lucro >= 0){
    console.log(lucro * 1000);
} else{
    console.log("Prejuízo");
}
