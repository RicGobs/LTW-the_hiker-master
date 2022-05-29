
    <?php
        
        
            $dbconn= pg_connect("host=localhost dbname=percorso
                port=5432 user=postgres password=fox");
            $dato_info = array();
            $nome = $_POST["nome"];
            $nome=str_replace(' ', '_', $nome);
            $email= $_POST["email"];
            
            $query = "SELECT * from percorso where nome=$1"; 
            $result=pg_query_params($dbconn,$query,array($nome));
            if($tuple=pg_fetch_array($result,null,PGSQL_ASSOC)){ 
                $dato_info['risultato'] = false;
                $dato_info['errore'] = "Esiste già un percorso con questo nome!";
                
            }
            else {
                $regione=$_POST["regione"]; 
                $comuneInizio=$_POST["comuneInizio"];
                $comuneFine=$_POST["comuneFine"];
                $lunghezza=$_POST["lunghezza"];
                $dislivello=$_POST["dislivello"];
                $tempo=$_POST["tempo"];
                $difficolta=$_POST["difficolta"];

                $query2 = "INSERT into percorso values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";  
                $result=pg_query_params($dbconn,$query2,array($nome,$email,$regione,$comuneInizio,$comuneFine,$lunghezza,$dislivello,$tempo,$difficolta));
               
                
                    
                if(!$result){ 
                    $dato_info['risultato'] = false;
                    $dato_info['errore'] = "Errore nell'inserimento del percorso!";
                }
                else{
                    $dato_info['risultato'] = true;
                }

                
            }
        
        pg_free_result($result);
        pg_close($dbconn);
        echo json_encode($dato_info);
    ?>
