function validaForm () {
    //regex per controllo mail
    if ((document.myForm.inputEmail.value=="")) {
        alert("Inserire l’email");
        return false;
      }
      var email =document.myForm.inputEmail.value;
      var myRegEx = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
      if ( !myRegEx.test(email) ) {
          alert("inserire un indirizzo email valido");
          return false;
      }
    return true;
      
}


