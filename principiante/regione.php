<?php
            $dbconn = pg_connect("host=localhost port=5432 
                dbname=escursionista user=postgres password=fox") 
                or die('Could not connect: '.pg_last_error());
            $dato_info = array();
            $email=$_POST["email"];
            $query= "SELECT * FROM escursionista WHERE email=$1";
            $result=pg_query_params($dbconn,$query,array($email));
            if(!$result){ 
                $dato_info['risultato'] = false;
                $dato_info['errore'] = "errore nella ricerca della regione";
            }
            else{
                $dato_info['risultato'] = true;
            }
            $tuple = pg_fetch_array ($result, null , PGSQL_ASSOC);
            $dato_info["regione"]=$tuple["regione"];
            pg_free_result($result);
            pg_close($dbconn);
            echo json_encode($dato_info);
            
        ?>