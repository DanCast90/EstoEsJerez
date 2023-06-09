<?php
move_uploaded_file($_FILES['file']['tmp_name'], '../../img/servicio/'. $_FILES['file']['name']);
die();
?>
