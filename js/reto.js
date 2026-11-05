const entradaNumero = document.getElementById("numero");

const resultado = document.getElementById("resultado");


entradaNumero.addEventListener("input", function() {
    let numeroCorrecto = 43;
    let numero = entradaNumero.value;
    if (numero < 1 || numero > 100) {
        resultado.textContent = "Numero fuera de rango"
    }else if(numero > numeroCorrecto) {
        resultado.textContent = "Muy arriba";
    
    }else if (numero < numeroCorrecto) {
        resultado.textContent = "Muy abajo";
    }else {
        resultado.textContent = numero + " ¡es el número correcto!";
    }
});


const tipohobby = document.getElementById("tipoHobby");

const imagen = document.getElementById("imagen");

tipohobby.addEventListener("change", function() {
    let opcion = tipohobby.value;
    if (opcion === "futbol") {
        imagen.src = "imgs/futbol.png";
    }else if (opcion === "tenis de mesa") {
        imagen.src = "imgs/tenis-mesa.png";
    }else if (opcion === "programar") {
        imagen.src = "imgs/programar.png";
    }else {
        imagen.src = "imgs/paisaje.png";
    }

});

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    let mensaje = "El instructor de javascript es mi inspiración del profesional que quiero llegar a ser"
    alert(mensaje);

});