<?php
            $dbconn = pg_connect("host=localhost port=5432 
                dbname=percorso user=postgres password=fox") 
                or die('Could not connect: '.pg_last_error());
            $dato_info = array();
            $regione=$_POST["regione"];
            $difficolta=$_POST["difficolta"];
            $query= "SELECT * FROM percorso WHERE regione=$1 and difficolta=$2" ;
            $result=pg_query_params($dbconn,$query,array($regione,$difficolta));
            if(!$result){ 
                $dato_info['risultato'] = false;
                $dato_info['errore'] = "errore nella ricerca dei percorsi";
            }
            else{
                $dato_info['risultato'] = true;
            }
            $i=0;
            while ($tuple = pg_fetch_array ($result, null , PGSQL_ASSOC)) {
                foreach ($tuple as $col_name => $value) {  
                    $dato_info[$col_name.$i]=$value;
                }
                $i++;
            }
            $dato_info["quanti"]=$i;
            pg_free_result($result);
            pg_close($dbconn);
            echo json_encode($dato_info);
            
        ?>