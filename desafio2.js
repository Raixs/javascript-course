alert("¡Vamos a comprobar si puedes entrar en la discoteca")
var edad = parseInt(prompt("¿Que edad tienes?"))

if (edad >= 19) {
    alert("Eres mayor de edad, puedes pasar!")
}
else if (edad === 18) {
    alert("Tienes 18 años! Podrás votar por primera vez!");
    alert("Pero si, puedes pasar...")
}
else if (edad <= -0){
    alert("¡A hacerle la bromita de los números negativos a otros, expulsado!!")
}
else{
    alert("Eres menor de edad! No puedes pasar")
}