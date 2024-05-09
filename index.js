let numero = Number(prompt("Digite o número"))
let resposta = 1
for(let i = 1 ; i <= numero ; i++ ){
    resposta *= i
}
document.querySelector(".resposta-fatorial").innerText = `O fatorial de ${numero} é ${resposta}`

let sequencia = [1,1]
if(numero == 1 || numero == 2){
    document.querySelector(".resposta-fibonacci").innerText = sequencia[numero-1]
}
else{
    for(let x = 2 ; x <= numero ; x ++){
        let proximoNumero = sequencia[x-1] + sequencia[x-2]
        sequencia.push(proximoNumero)
    }
    document.querySelector(".resposta-fibonacci").innerText = `O ${numero}° número na sequência de fibonacci é ${sequencia[numero-1]}`
}