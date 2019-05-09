var numAux = 0;
function numero(num){
    if( document.getElementById("pantalla").value != '0'){
    document.getElementById("pantalla").value=(document.getElementById("pantalla").value+ num);
    }else{
        document.getElementById("pantalla").value=(num);
    }
}

function borrar() {
    var num = document.getElementById("pantalla").value
    if(num.length <= 1){
        document.getElementById("pantalla").value=("0");
        numAux = 0;

    }else{
        document.getElementById("pantalla").value=(num.substr(0,num.length-1))
    }
}