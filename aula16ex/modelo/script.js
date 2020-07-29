let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //Criando o vetor vazio

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores) ) {
        valores.push(Number(num.value)) //adicionando valor no vetor e na lista
        let item = document.createElement('option') //Criando uma variavel dinamica
        item.text = `Valor ${num.value} adicionado` // texto que deve aparecer na lista 
        lista.appendChild(item) // modo de fazer o texto aparecer na lista
    }  else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = '' //limpar espaco da caixa de texto que coloca o  numero
    num.focus() //fazer o cursor piscar na caixa de texto
}