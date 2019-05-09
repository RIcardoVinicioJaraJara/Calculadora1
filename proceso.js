function numero(num){
    if( document.getElementById("pantalla").value != '0'){
    document.getElementById("pantalla").value=(document.getElementById("pantalla").value+ num);
    }else{
        document.getElementById("pantalla").value=(num);
    }
}