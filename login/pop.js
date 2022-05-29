function salvaMail(){
    
    var email=document.getElementById("email").value;
    var categoria=document.getElementById("categoria").value;
    sessionStorage.email=email;
    sessionStorage.categoria=categoria;
    //alert(sessionStorage.email);
}




