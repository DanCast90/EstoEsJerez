<?php
move_uploaded_file($_FILES['file']['tmp_name'], '../../img/photoProfile/'. $_FILES['file']['name']);
die();
?>
