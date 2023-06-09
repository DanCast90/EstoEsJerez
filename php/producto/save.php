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
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$tipoProducto = $_POST['tipoProducto'];
$url=$_POST['url'];

if($id!=0){
    $sql = "UPDATE producto SET Nombre = '$nombre', 
     descripcion = '$descripcion', tipoProducto = '$tipoProducto',
    url = '$url' WHERE id_Prod = $id";
}else{
    $sql = "INSERT INTO producto (Nombre, descripcion,  tipoProducto, url) 
        VALUES ('$nombre', '$descripcion', '$tipoProducto', '$url')";

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