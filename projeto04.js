let num = document.getElementById('fnum')
let Lista = document.getElementById('fLista')
let res = document.getElementById('res')
let valores = []

function numero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
    return true
   } else{
    return false

   }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adicionar() {
   if(numero (num.value) && !inLista (num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
       Lista.appendChild(item) 
       res.innerHTML = ""
   }else{
    alert(`[ERROR] valor invalido ou já usado na lista`)
   }
   num.value = ""
   num.focus()
   
}


function finalizar(){
    if(valores.length == 0){
        alert('adicione um valor antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
    for(let pos in valores){
        soma += valores[pos]
       if(valores[pos] > maior)
       maior = valores[pos]
    if(valores[pos] < menor)
    menor = valores[pos]
    }
    media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>o maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>somando os valores temos ${soma}</p>`
        res.innerHTML += `<p>a media dos valores é ${media}</p>`
        
    }
}

