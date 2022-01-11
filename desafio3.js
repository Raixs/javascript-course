alert("No pueden acceder más de 5 personas, así que uno por uno diganme sus nombres")

for (var i = 0; i < 5; i++) {
     estudiante = prompt("¿Como se llama?")
     alert("Hola! " + estudiante + " puede pasar")
}

alert("No puede acceder nadie más")