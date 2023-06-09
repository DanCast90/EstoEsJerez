<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "estoesjerez";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$nombreUsuario = $_POST['username'];
$contrasena = $_POST['pass'];

$sql = "SELECT * FROM usuario WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nombreUsuario);
$stmt->execute();
$result = $stmt->get_result();


if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashedPassword = $row['password'];
    if ($contrasena == $hashedPassword) {
        $response = array(
            "status" => 1,
            "message" => "Inicio de sesión exitoso",
            "userId" => $row['id_Usuario'],
            "username" => $row['username']
        );
    } else {
        $response = array(
            "status" => 0,
            "message" => "Contraseña incorrecta"
        );
    }
} else {
    $response = array(
        "status" => -1,
        "message" => "El usuario no existe"
    );
}
header('Content-Type: application/json');
echo json_encode($response);

$stmt->close();
$conn->close();
?>