let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['jan', 'Fev', 'Mar', 'Abr']
var test = Array(10)
test[0] = 'oi' /* Com isso eu adiciono, na posição 0 o elemento 'oi'*/

// ADICIONAR no final push = empurre
produtos.push('Açucar')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago')

//REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

//ADICIONAR no inicio inshift
produtos.unshift('Uva', 'Maçã')

//REMOVER do inicio da lista shift
produtos.shift()

// REMOVER de uma posição específica splice
//splice = emendar
//posição inicial, quantos remover
codigos.splice(1, 3)

//COPIAR aray slice = fatiar porção
//posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = mese.slice(0, 2)

//VER TAMANHO DO ARRAY length = comprimento
meses.length
meses1.length
meses2.length

// spreed operator
let teste = [...produtos, 'Ovo', 'Pera']