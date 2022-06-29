

 


  //console.log('Bem vinda, ' + info.personagem);
//for(key in info){
//console.log(info[0][key])
//}

  //console.log(info);

 // for(let key in info){
//console.log(key)
 // }

//for(let key in info){
//console.log(info[key])
//}
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountaiin, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente:'Sim'
  }

function exercicio(objeto1,objeto2){
for(let exemplo in objeto1){
    if(objeto1[exemplo] === objeto2[exemplo]){
        console.log("Ambos recorrentes")
    } else{
    console.log(objeto1[exemplo] + ' ' + 'e ' + ' ' + objeto2[exemplo]);
}
}
}

exercicio(info,info2)


