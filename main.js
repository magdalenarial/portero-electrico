let pisoValue = "";
let dptoValue = "";

function botonPortero(number){
    // Esta funcion toma los inputs de piso y dpto, y las variables con los valores de ambos
    // Mientras no se llegue al length esperado se cargan valores en las variables
    // Primero completa el valor del piso y luego el dpto, en caso de que esten completos sale una alerta

    let piso = document.getElementsByName("piso")[0];
    let dpto = document.getElementsByName("dpto")[0];

    if(pisoValue.length < 2){
        pisoValue += number;
    }
    else{
        if(dptoValue.length < 1){
            dptoValue += number;
        }
        else{
            
        }
    }
    piso.placeholder = pisoValue;
    dpto.placeholder = dptoValue;
}

function llamar(){
    // Si las variables de piso y dpto estan completos chequea que los valores sean validos y setea el placeholder en el visor
    // Si no estan completas las variables o los numeros no son validos para el rango setea el error en el visor
    let visor = document.getElementsByName("visor")[0];

    if(pisoValue.length == 2 && dptoValue.length == 1){
        if(validNumber(pisoValue, 0, 42) && validNumber(dptoValue, 1, 8)){
            visor.placeholder = `Llamando al piso ${pisoValue}, departamento ${dptoValue}`;
        }
        else{
            visor.placeholder = `Error, números inválidos`;
        }
    }
}

function validNumber(value, min, max){
    // Si el valor pasado esta dentro del minimo y maximo esperado retorna true, caso contrario false
    if(value <= max && value >= min){
        return true;
    }
    return false;
}

function borrarVisor(){
    // Borra los valores de las variables guardadas y resetea los placeholders de los inputs
    let piso = document.getElementsByName("piso")[0];
    let dpto = document.getElementsByName("dpto")[0];
    let visor = document.getElementsByName("visor")[0];

    visor.placeholder = "";
    piso.placeholder = "PISO";
    dpto.placeholder = "DPTO";
}
