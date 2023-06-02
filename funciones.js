let i = 1


function concatenar (nombre, apellido) {
    return nombre + " " + apellido
}


do {
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let respuesta = prompt("¿Quiere un turno? Indique si o no")
        
        if (respuesta === "si") {
            i++
            console.log ("Hola " + concatenar(nombre, apellido) + " solicitaste con éxito tu turno. Muchas gracias" )
        }

        else {
            alert("Muchas gracias por su contacto " + concatenar(nombre, apellido) +". Hasta la próxima") 
        }

    } 
    
    while (i < 6) {
        alert("No hay mas turnos. Disculpe las molestias")
    }





