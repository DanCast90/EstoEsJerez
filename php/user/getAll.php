<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "estoesjerez";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$sql = "SELECT * FROM usuario";
$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $response[] = array(
            "ID" => $row['id_Usuario'],
            "RFC" => $row['RFC'],
            "Nombre" => $row['Nombre'],
            "Apellidos" => $row['PrimerAp']." ".$row['SegundoAp'],
            "Telefono" => $row['Telefono'],
            "url" => $row['url'],
            "username" => $row['username'],
            "tipoUsuario" => $row['tipoUsuario'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
