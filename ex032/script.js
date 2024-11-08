var peso = Number(prompt("digite seu peso"))
var altura = Number(prompt("digite sua altura"))
var imc = peso / (altura ** 2)
alert(imc)
if(imc < 18.5){
    alert("abaixo do peso")
}else if(imc > 18.5 && imc < 24.9){
    alert("peso normal")
}else if(imc > 25  && imc < 29.9){
    alert("sobre peso")
}else{
    alert("obesidade")
}
    

   