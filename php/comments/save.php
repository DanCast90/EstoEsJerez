<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "estoesjerez";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$direccion = $_POST['direccion'];
$codigo_postal = $_POST['codigo-postal'];
$comentarios = $_POST['comentarios'];

$sql = "INSERT INTO comentarios (nombre, apellidos, telefono, email, direccion, CP, comentario)
        VALUES ('$nombre', '$apellidos', '$telefono', '$email', '$direccion', '$codigo_postal', '$comentarios')";

if ($conn->query($sql) === TRUE) {
    $response = "1";
} else {
    $response = "Error al guardar los datos:
" . $conn->error;
}

$conn->close();

echo $response;
?>