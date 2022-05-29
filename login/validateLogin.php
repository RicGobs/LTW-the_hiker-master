<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="pop.js"></script>
    <title>Document</title>
</head>
<body>
        <?php
        if(!isset($_POST["loginButton"])){ 
            header("Location: ../start/start.html"); 
        }
        else { //mi connetto al DB
            $dbconn= pg_connect("host=localhost dbname=escursionista 
                port=5432 user=postgres password=fox");
            $email=$_POST["inputEmail"];
            $query = "SELECT * from escursionista where email=$1";  //email uguale al primo parametro ovvero email inserito dall'utente
            $result=pg_query_params($dbconn,$query,array($email));//viene fatto il bind nell'array
            if(!($tuple=pg_fetch_array($result,null,PGSQL_ASSOC))){ 
                header("Location: login.html");
               
            }
            else {
                $password=md5($_POST["inputPassword"]);
                $esperto=$_POST["inputEsperto"];
                $query2= "SELECT * FROM escursionista WHERE email=$1 and paswd=$2 and esperto=$3" ;
                $result=pg_query_params($dbconn,$query2,array($email,$password,$esperto));

                if($tuple=pg_fetch_array($result,null,PGSQL_ASSOC)){
                    $nome=$tuple["nome"]; //tuple contiene colonne del DB 
                    //QUA CI SARà IF CON LE DUE VIE
                    if($esperto=="principiante"){
                        
                        header("Location: ../principiante/principiante.html");
                    }
                    else{
                        header("Location: ../esperto/esperto.html");
                    }
                    

                }
                else{
                    
                   
                    //sleep(5);
                    header("Location: login.html");

                }

            }
        }
    ?>
</body>
</html>