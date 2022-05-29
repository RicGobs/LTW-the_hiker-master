

  function debug(e){
      alert("funziona");
  }

  function resettaSessione(e){
    sessionStorage.clear(); //sessionAtorge.email=NaN
  }

  function assegnaEventHandlers(){
    var logout=document.getElementById("logout-btn");
    logout.addEventListener("click",resettaSessione);
    
  }
  
  