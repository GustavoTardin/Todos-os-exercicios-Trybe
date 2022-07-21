const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

 const chaveValor = (student) => {
    const chaves = Object.keys(student);
    for(let index in chaves) {
        console.log(`${chaves[index]} Valor: ${student[chaves[index]]}`);
    }
 }

 console.log("Estudante 1");

 chaveValor(student1);