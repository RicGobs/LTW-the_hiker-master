function resettaSessione(e){
    sessionStorage.clear();
  }
function trovaComuni(e){
  var regioneDB=$("#regione").val();

  var richiesta=$.ajax({
    type:"POST",
    url: "comuni.php",
    dataType: 'json',
    data: {
       regione:regioneDB
    }
}); 

richiesta.done(function(dato_info){
  if(dato_info.risultato){
    var elem1=document.getElementById("comuneinizio");
    var elem2=document.getElementById("comunefine");
    var quanti=dato_info.quanti;
      var s="";
      for(i=0;i<quanti;i++){
       
        s+= "<option></option>"+
            "<option>"+dato_info["comune"+i]+"</option";
       
           
      }
      elem1.innerHTML=s;
      elem2.innerHTML=s;
    
  }
  else{
    alert(dato_info.errore);
  }
});
  richiesta.fail(function(){alert("Errore richiesta database comuni"); });
  
}





function assegnaEventHandlers(){
   elem=document.getElementById("logout-btn");
   elem.addEventListener("click",resettaSessione);
   el=document.getElementById("ready-btn");
   el.addEventListener("click",validaDati);
   reg=document.getElementById("regione");
   reg.addEventListener("change",trovaComuni);
  

    
  }


function creaPercorso(){
    var nomeDB=$("#nome").val();
    var emailDB=$("#email").val();
    var regioneDB=$("#regione").val();
    var comuneInizioDB=$("#comuneinizio").val();
    var comuneFineDB=$("#comunefine").val();
    var lunghezzaDB=$("#lunghezza").val();
    var dislivelloDB=$("#dislivello").val();
    var tempoDB=$("#tempo").val();
    var difficoltaDB=$("#difficolta").val();



    var richiesta=$.ajax({
      type:"POST",
      url: "create.php",
      dataType: 'json',
      data: {
          nome:nomeDB, email:emailDB, regione:regioneDB, comuneInizio:comuneInizioDB, comuneFine:comuneFineDB, lunghezza:lunghezzaDB, dislivello:dislivelloDB, tempo:tempoDB, difficolta:difficoltaDB
      }
  }); 
  richiesta.done(function(dato_info){
    if(dato_info.risultato){
      alert("Percorso inserito correttamente!");
    }
    else{
      alert(dato_info.errore);
    }
  });
    richiesta.fail(function(){alert("Errore richiesta"); });
    
  }
