alert("Vamos a calcular el precio de las fotocopias que quieres realizar");

function color() {
    seleccion = prompt("Debes escribir a continuación 'color' o 'negro' para definir el precio de cada página")
    //Convertimos a minusculas
    seleccion = seleccion.toLowerCase();
    if (seleccion == "negro") {
        precio = parseFloat(0.05)
        console.log("Ha elegido negro: " + precio)
        alert("Has elegido negro, el precio de cada página es de 5 céntimos")
        SelecColor = "negro"
    }
    else if (seleccion == "color") {
        precio = parseFloat(0.50)
        console.log("Ha elegido color: " + precio)
        alert("Has elegido color, el precio de cada página es de 50 céntimos")
        SelecColor = "color"
    }
    else {
        alert("Debes seleccionar una opción válida")
        location.reload();
    }
};

function cantidad() {
    paginas = parseInt(prompt("¿Cuántas páginas vas a mandar imprimir?"))
};

function multiplicación(a,b) {
     return a * b; 
};

color();
cantidad();

resultado = multiplicación(paginas, precio); 
// alert("El precio de su pédido es: " + resultado + "€")

class aviso {
aviso(color,paginas,resultado) {
    this.color = color;
    this.paginas   = paginas;
    this.resultado  = resultado;
}
}
const compra = new aviso(seleccion, paginas, resultado);

console.log(this.compra)


