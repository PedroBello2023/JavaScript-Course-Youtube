/* Arquivo JS aula 06 DOM */

//DOM = Document Object Model
/* Arvore com elementos desde o Browser, a janela do Browser, o documento HTML que formam os conteúdos */

/* document -> html -> head e body
history */

/* PARA MANPULAR O DOM PRECISAMOS:
indicar qual o objeto usar, depois chamar um método (funçõ) para selecionar ele, seus dados, trazer informações, etc. */

//querySelector()
//seleciona elemento com base na sua tag #id ou .class

let titulo = document.querySelector('#titulo')
//console.log(titulo)

/* .textContent
propriedade ou atributo textContent que serve para selecionar ou alterar conteúdo de um elemento que foi selecionado */
// console.log(titulo.textContet)
//console.log(titulo.innerHTML)

titulo.textContent = 'DOM'

//.querySelectorAll()
//seleciona todos os elementos com base na tag, #id ou .class


let testando = document.querySelectorAll('.box')
//console.log(testando)
document.write(testando[0].textContent)

/* Existem outros elementos como:
.getElementByTagName()
.getElementById()
.getElementByClassName()
*/
