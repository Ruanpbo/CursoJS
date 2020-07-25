function gerar(){
    let num = document.getElementById('num')
    let som = document.getElementById('soma')
    let div = document.getElementById('divisao')
    let mul = document.getElementById('multiplicacao')
    let sub = document.getElementById('subtracao')

    if (num.value.length == 0) {
        window.alert('Por Favor digite um numero!')
    } else {
         let n = Number(num.value)
         som.innerHTML = ''
         div.innerHTML = ''
         mul.innerHTML = ''
         sub.innerHTML = ''
         let c = 1
    while (c <= 10) {
        
        if ( c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `som${c}`
            som.appendChild(item)
        } 
        if ( c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `div${c}`
            div.appendChild(item)
        }
        if ( c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `mul${c}`
            mul.appendChild(item)
        }
        if ( c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `sub${c}`
            sub.appendChild(item)
            c++         
        }   
    } 
}
}