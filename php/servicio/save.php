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
$tipoServicio = $_POST['tipoServicio'];
$url=$_POST['url'];

if($id!=0){
    $sql = "UPDATE servicio SET Nombre = '$nombre', 
     descripcion = '$descripcion', TipoServicio = '$tipoServicio',
    url = '$url' WHERE id_Serv = $id";
}else{
    $sql = "INSERT INTO servicio (Nombre, descripcion,  TipoServicio, url) 
        VALUES ('$nombre', '$descripcion', '$tipoServicio', '$url')";

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