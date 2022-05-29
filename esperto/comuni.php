<?php
    $dbconn = pg_connect("host=localhost port=5432 
        dbname=comune user=postgres password=fox") 
        or die('Could not connect: '.pg_last_error());
    $dato_info = array();
    $regione=$_POST["regione"];
    $query= "SELECT * FROM comune WHERE regione=$1";
    $result=pg_query_params($dbconn,$query,array($regione));
    if(!$result){ 
        $dato_info['risultato'] = false;
        $dato_info['errore'] = "errore nella ricerca dei comuni";
    }
    else{
        $dato_info['risultato'] = true;
    }
    $i=0;
    while ($tuple = pg_fetch_array ($result, null , PGSQL_ASSOC)) {
        foreach ($tuple as $col_name => $value) { 
            if($col_name=="comune") 
                $dato_info[$col_name.$i]=$value;
        }
        $i++;
    }
    $dato_info["quanti"]=$i;
    pg_free_result($result);
    pg_close($dbconn);
    echo json_encode($dato_info);
?>