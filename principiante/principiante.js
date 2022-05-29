function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resettaSessione(e){
    sessionStorage.clear();
  }


function assegnaEventHandlers(){
   elem=document.getElementById("logout-btn");
   elem.addEventListener("click",resettaSessione);
    
  }

  function debug(){
    alert(sessionStorage.email + sessionStorage.categoria);
  }

  function cercaPercorsi(){
    var regioneDB=$("#regione").val();
    var difficoltaDB=$("#difficolta").val();

    var richiesta=$.ajax({
      type:"POST",
      url: "search.php",
      dataType: 'json',
      data: {
          regione:regioneDB, difficolta:difficoltaDB
      }
  }); 
  richiesta.done(function(dato_info){
    if(dato_info.risultato){
      var elem=document.getElementById("corpoTabella");
      var quanti=dato_info.quanti;
      var s="";
      for(i=0;i<quanti;i++){
        //var info="percorso.php?"+"percorso="+dato_info["nome"+i]+"&"+"regione="+dato_info["regione"+i]+"&"+"comuneinizio="+dato_info["comuneinizio"+i]+"&"+"comunefine="+dato_info["comunefine"+i];
        var info="https://www.google.it/search?q="+dato_info["nome"+i]+"%20"+dato_info["regione"+i]+"%20"+dato_info["comuneinizio"+i]+"%20"+dato_info["comunefine"+i];
       
        s+= "<tr>"
        +"<td>"+"<a href="+info+">"+dato_info["nome"+i]+"</a>"+"</td>"
        +"<td>"+dato_info["creatore"+i]+"</td>"
        +"<td>"+dato_info["regione"+i]+"</td>"
        +"<td>"+dato_info["comuneinizio"+i]+"</td>"
        +"<td>"+dato_info["comunefine"+i]+"</td>"
        +"<td>"+dato_info["lunghezza"+i]+"</td>"
        +"<td>"+dato_info["dislivello"+i]+"</td>"
        +"<td>"+dato_info["tempo"+i]+"</td>"
        +"<td>"+dato_info["difficolta"+i]+"</td>"
            +"<tr/>";
        
           
      }
      elem.innerHTML=s;
          

      
    }
    else{
      alert(dato_info.errore);
    }
  });
    richiesta.fail(function(){alert("Errore richiesta al server"); });
    
  }


  
  function cercaPercorsiParam(regioneDB){
    

    var richiesta=$.ajax({
      type:"POST",
      url: "searchWithReg.php",
      dataType: 'json',
      data: {
          regione:regioneDB
      }
  }); 
  richiesta.done(function(dato_info){
    if(dato_info.risultato){
      var elem=document.getElementById("corpoTabella");
      var quanti=dato_info.quanti;
      var s="";
      for(i=0;i<quanti;i++){
        //var info="percorso.php?"+"percorso="+dato_info["nome"+i]+"&"+"regione="+dato_info["regione"+i]+"&"+"comuneinizio="+dato_info["comuneinizio"+i]+"&"+"comunefine="+dato_info["comunefine"+i];
        var info="https://www.google.it/search?q="+dato_info["nome"+i]+"%20"+dato_info["regione"+i]+"%20"+dato_info["comuneinizio"+i]+"%20"+dato_info["comunefine"+i];
       
        s+= "<tr>"
        +"<td>"+"<a href="+info+">"+dato_info["nome"+i]+"</a>"+"</td>"
        +"<td>"+dato_info["creatore"+i]+"</td>"
        +"<td>"+dato_info["regione"+i]+"</td>"
        +"<td>"+dato_info["comuneinizio"+i]+"</td>"
        +"<td>"+dato_info["comunefine"+i]+"</td>"
        +"<td>"+dato_info["lunghezza"+i]+"</td>"
        +"<td>"+dato_info["dislivello"+i]+"</td>"
        +"<td>"+dato_info["tempo"+i]+"</td>"
        +"<td>"+dato_info["difficolta"+i]+"</td>"
            +"<tr/>";
        
           
      }
      elem.innerHTML=s;
          

      
    }
    else{
      alert(dato_info.errore);
    }
  });
    richiesta.fail(function(){});
    
  }

