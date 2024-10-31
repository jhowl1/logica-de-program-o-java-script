var troca = Number(prompt("coloque o valor para troca "))
var dois =  Number(prompt("coloque outro valor "))

var primeiro = troca

troca = dois
dois = primeiro
alert(`o resultado é ${troca} e ${dois}`)