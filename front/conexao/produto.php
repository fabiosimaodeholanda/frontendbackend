<?php
header("Access-Control-Allow-Origin:*"); 
header("Content-type: application/json"); 
require_once 'conexao.php';

if($_SERVER['REQUEST_METHOD']==='GET'){
  
  
    $sql = "SELECT * FROM fseletro.produto join valores on produto.id_produto =valores.id_valores;";
    $resultado = query($sql);
    $comentarios = [];

    while($linha = mysqli_fetch_assoc($resultado)){
        $comentarios[] = $linha;
    }
    echo json_encode($comentarios);
} 
    else{
echo "falha no processamento dos dados.Metodo inválido.";
}

?>
