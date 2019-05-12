var numAux = 0;
var operacion = "";
function numero(num) {
    if (document.getElementById("pantalla").value != '0') {
        document.getElementById("pantalla").value = (document.getElementById("pantalla").value + num);
    } else {
        document.getElementById("pantalla").value = (num);
    }
}

function borrar() {
    var num = document.getElementById("pantalla").value
    if (num.length <= 1) {
        document.getElementById("pantalla").value = ("0");
        numAux = 0;

    } else {
        document.getElementById("pantalla").value = (num.substr(0, num.length - 1))
    }
}

function ce() {
    document.getElementById("pantalla").value = ('0')
}
function c() {
    document.getElementById("pantalla").value = ('0')
    numAux = 0
}
function masmenos() {
    var num = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (num * -1)
}

function raiz() {
    var num = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (Math.sqrt(num))

}

function divicion() {
    numAux = document.getElementById("pantalla").value
    operacion = '/'
    document.getElementById("pantalla").value = ('0')
}
function suma() {
    numAux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = ('0')
    operacion = '+'
}
function resta() {
    numAux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = ('0')
    operacion = '-'
}
function multi() {
    numAux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = ('0')
    operacion = '*'
}

function igual() {
    var num = document.getElementById("pantalla").value
    switch (operacion) {
        case "/":
            numAux = parseFloat(numAux) / parseFloat(num)
            break;
        case "+":
            numAux = parseFloat(numAux) + parseFloat(num)
            break;
        case "-":
            numAux = parseFloat(numAux) - parseFloat(num)
            break;
        case "*":
            numAux = parseFloat(numAux) * parseFloat(num)
            break;
    }

}