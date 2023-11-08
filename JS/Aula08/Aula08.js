/* Aula 10 Funções ou Métodos em JavaScript */

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Função no Js'
let box = document.querySelector('box')

/* Funções sem parâmetros e sem retorno (procedure) */

function olaMundo(){
    document.write ('Olá mundo sem Retorno<br>')
}

function olaMundo2(){
    return 'Olá mundo com retorno <br>'
}

//Chamar a função = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 3
let mensagem = 'Jesus cristo é o Salvador'

/* Funções com parâmetros e sem retorno (procedure) */

function somar(a, b) {
    document.write(a + b + "<br>")
}

/* Funções com parâmetros e com retorno (function) */

function somar2(c, d) {
    return c + d
}

// chamar a função = executar elas
somar(x, y)
document.write(somar2(10, y))
document.write(`<p> ${somar2(5, 3)} </p>`)

/* Função anonima = não tem nome, pode ou não ter parâmetros, pode ou não ter retorno */

titulo.addEventListener('click', function() {
    console.log('Clicou no título')
})

/* Arrow Function Es6 2015 em diante */

const Nome = () => { document.write('Pedro Henrique')}

Nome()
