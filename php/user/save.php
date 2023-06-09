<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "estoesjerez";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}
$id=$_POST['id'];
$rfc=$_POST['rfc'];
$nombre = $_POST['nombre'];
$apellido1 = $_POST['primerAp'];
$apellido2 = $_POST['segundoAp'];
$telefono = $_POST['telefono'];
$username = $_POST['username'];
$password = $_POST['password'];
$tipoUsuario = $_POST['tipoUsuario'];
$url=$_POST['url'];

if($id!=0){
    $sql = "UPDATE usuario SET RFC = '$rfc', Nombre = '$nombre', 
    PrimerAp = '$apellido1', SegundoAp = '$apellido2', 
    Telefono = '$telefono', username = '$username', password = '$password', tipoUsuario = '$tipoUsuario',
    url = '$url' WHERE id_Usuario = $id";
}else{
    $sql = "INSERT INTO usuario (RFC, Nombre, PrimerAp, SegundoAp, Telefono, username, password, tipoUsuario, url) 
        VALUES ('$rfc', '$nombre', '$apellido1', '$apellido2', '$telefono', '$username', '$password', '$tipoUsuario', '$url')";

}

if ($conn->query($sql) === TRUE) {
    $response = array(
        "status" => 1,
        "message" => "Datos Guardados Correctamente"
    );
} else {
    $response = array(
        "status" => -1,
        "message" => "No se pudieron guardar los datos"
    );
}
header('Content-Type: application/json');
echo json_encode($response);
$conn->close();

?>