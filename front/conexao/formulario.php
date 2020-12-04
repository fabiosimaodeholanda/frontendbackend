<?php
header("Access-Control-Allow-Origin:*"); 
header("Content-type: application/json"); 
require_once 'conexao.php';


if($_SERVER['REQUEST_METHOD']==='GET'){
  

    $sql = "SELECT * FROM fseletro.comentarios";
    $resultado = query($sql);
    $comentarios = [];

    while($linha = mysqli_fetch_assoc($resultado)){
        $comentarios[] = $linha;
    }


    echo json_encode($comentarios);

} else if($_SERVER['REQUEST_METHOD'] === 'POST') { 

        $nome = $_POST['nome'];
        $msg = $_POST['msg'];
        $numero = $_POST['numero'];
     
     
      $sql = "INSERT INTO `fseletro`.`comentarios` (`nome`, `msg`, `numero`) VALUES ('$nome', '$msg', '$numero')";
            
      nonquery($sql);

} else if($_SERVER['REQUEST_METHOD']==='PUT'){

   echo json_encode(array("mensagem"=> "metodo put efetuando"));
} else if($_SERVER['REQUEST_METHOD']==='DELETE'){
    
    echo json_encode(array("mensagem"=> "metodo delete efetuando"));
} else{
echo "falha no processamento dos dados.Metodo inválido.";
}

?>