<?php

function query($sql){
    $servername="localhost";
    $username="fabio";
    $passaword="@fabio123";
    $database= "fseletro";
        
    $connect = mysqli_connect($$servername , $username, $passaword, $database);
    $resultado = mysqli_query($connect, $sql);
    mysqli_close($connect);
    return $resultado;
}

function nonquery($sql){
    $$servername="localhost";
    $username="fabio";
    $passaword="@fabio123";
    $database= "fseletro";
        
    $connect = mysqli_connect($$servername , $username, $passaword, $database;
    $resultado = mysqli_query($connect, $sql);
    mysqli_close($connect);
   
}



?>