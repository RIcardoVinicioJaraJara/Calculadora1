var numAux = 0;
var operacion = "";
var porce = 0;
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



function porcetaje() {
    var numAux1 = document.getElementById("pantalla").value
    porce = ((numAux * numAux1) / 100);
    switch (operacion) {
        case "/":
            numAux = parseFloat(numAux) / parseFloat(porce)
            break;
        case "+":
            numAux = parseFloat(numAux) + parseFloat(porce)
            break;
        case "-":
            numAux = parseFloat(numAux) - parseFloat(porce)
            break;
        case "*":
            numAux = parseFloat(numAux) * parseFloat(porce)
            break;

    }
    operacion = '%'
}

function unosobre() {
    numAux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (1 / (numAux))
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
        case "%":
            numAux
            break;
    }
    document.getElementById("pantalla").value = (numAux)
}


function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    if (((key >= 48 && key <= 57))) {
        if (document.getElementById("pantalla").value != '0') {
            document.getElementById("pantalla").value = (document.getElementById("pantalla").value + e.key);
        } else {
            document.getElementById("pantalla").value = (e.key);

        }
    } else {
        switch (e.key) {
            case "/":
                divicion()
                break;
            case "+":
                suma()
                break;
            case "-":
                resta()
                break;
            case "*":
                multi()
                break;
            case "=":
                igual()
                break;
            case "%":
                unosobre()
                break;
            case ".":
                numero('.')
                break;
            default:
                if (e.keyCode == 13) {
                    igual()
                }
                break;
        }
        return false;
    }
}

function nada(){
    return false;
}