<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(!isset($_POST["registrationButton"])){ //questo campo viene settato solo se un utente si è effettivamente registrato
            header("Location: ../start/start.html"); //lo imandiamo all'index.html della cartella precedente (header della connsessione http)
        }//controllo se qualcuno prova a scrivere il link per lanciare registrazione.php senza passare per il pulsante registrati
        else { //mi connetto al DB
            $dbconn= pg_connect("host=localhost dbname=escursionista 
                port=5432 user=postgres password=fox");
            $email = $_POST["inputEmail"];
            $query = "SELECT * from escursionista where email=$1";  //email uguale al primo parametro ovvero email inserito dall'utente
            $result=pg_query_params($dbconn,$query,array($email));//viene fatto il bind nell'array
            if($tuple=pg_fetch_array($result,null,PGSQL_ASSOC)){ //se la query ha restituito qualcosa
                header("Location: ../login/login.html");//con pop up che dice che la mail c'è
            }
            else {
                $nome= $_POST["inputNome"];
                $cognome= $_POST["inputCognome"];
                $password= md5($_POST["inputPassword"]); //se uso md5() fa un hash e non salva la password in chiaro sul DB
                $regione=$_POST["inputRegione"];
                $esperto=$_POST["inputEsperto"];

                $query2 = "INSERT into escursionista values ($1,$2,$3,$4,$5,$6)";  
                $result=pg_query_params($dbconn,$query2,array($nome,$cognome,$email,$password,$regione,$esperto));//viene fatto il bind nell'array
                //SERVE PER EVITARE SQL INJECTION, il metodo fa l'ESCAPE (interpreta letteralmente) i caratteri inseriti dall'utente 
                if($result){
                    header("Location: ../login/login.html");//con pop up che dice che ti sei registrato bene
                    
                }
                else{
                    
                    header("Location: ../registrazione/registrazione.html");

                }
            }
        }
    ?>
</body>
</html>