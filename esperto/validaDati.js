function validaDati(e) {
   
    if (document.getElementById("email").value=="") {
        alert("email non presente, effettuare il login come esperto!");
        e.target.checked=false;
        return false;
    }
    if(document.getElementById("nome").value==""){
      alert("nome percorso non inserito!");
      e.target.checked=false;
      return false;
    }
  
    
    var v=parseInt(document.getElementById("lunghezza").value);
    if (isNaN(v)) {
        alert("La lunghezza deve essere un numero");
        e.target.checked=false;
        return false;
    }
    var w=parseInt(document.getElementById("dislivello").value);
    if (isNaN(w)) {
        alert("La dislivello deve essere un numero");
        e.target.checked=false;
        return false;
    }
    var z=parseInt(document.getElementById("tempo").value);
    if (isNaN(z)) {
        alert("La durata deve essere un numero");
        e.target.checked=false;
        return false;
    }
    if (document.getElementById("regione").value=="") {
        alert("Inserire comune di partenza");
        e.target.checked=false;
        return false;
      }
    if (document.getElementById("comuneinizio").value=="") {
        alert("Inserire comune di partenza");
        e.target.checked=false;
        return false;
      }
      if (document.getElementById("comunefine").value=="") {
        alert("Inserire comune di arrivo");
        e.target.checked=false;
        return false;
      }
      if (document.getElementById("difficolta").value=="") {
        alert("Inserire la difficoltà");
        e.target.checked=false;
        return false;
      }
    
    document.getElementById("create-btn").style.visibility="visible";
    elems=document.getElementsByTagName("input"); //questa è una node-list
    for(i=0;i<elems.length;i++){
        elems[i].readOnly="true";
    }
    document.getElementById("regione").disabled=true;
    document.getElementById("comuneinizio").disabled=true;
    document.getElementById("comunefine").disabled=true;
    document.getElementById("difficolta").disabled=true;
    return true;
}