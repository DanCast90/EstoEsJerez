<?php
move_uploaded_file($_FILES['file']['tmp_name'], '../../img/producto/'. $_FILES['file']['name']);
die();
?>
