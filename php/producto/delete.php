<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "estoesjerez";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $response = array(
        "status" => -1,
        "message" => "Error en la conexión a la base de datos: " . $conn->connect_error
    );
    echo json_encode($response);
    exit();
}

$idUser = $_POST['id']; // Obtener el ID del registro a eliminar desde el parámetro

$sql = "DELETE FROM producto WHERE id_Prod = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $idUser);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    $response = array(
        "status" => 1,
        "message" => "El registro ha sido eliminado exitosamente."
    );
} else {
    $response = array(
        "status" => 0,
        "message" => "No se encontró ningún registro con el ID proporcionado."
    );
}

$stmt->close();
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
