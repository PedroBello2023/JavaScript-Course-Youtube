// CRIAR OBJETOS
let pessoa = {
    nome : 'Edson',
    idade : 40,
    peso : 83.5,
    altura : 1.75,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : [],
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : ['1999', '2005', '2010'],

}

// como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

//acessar propriedade usando ['']
/* 
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// Podemos fazer operações com essas propriedades
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// toFixed(x)
// limita o número de casas decimais 
console.log('IMC ' + imc.toFixed(2))

//ALTERAR/ADICIONAR VALOR de propriedades
produtos.descricao = ['Arroz']
produtos.preco = ['4.99']

//Usando Spread Operator
produtos.descricao = [...produtos.descricao, 'Feijão']
produtos.preco = [...produtos.preco, '9.99']

//Usando o Spread Operator
carros.ano = [...carros.marca, 'WV']
carros.marca = [...carros.marca, 'Fusca']
carros.modelo = [...carros.modelo, '1979']