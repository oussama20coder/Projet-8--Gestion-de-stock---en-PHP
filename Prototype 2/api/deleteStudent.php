<?php
$id = $_POST["id"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd", "root", "");
$sql = "DELETE FROM schoolstudents WHERE id = $id";
$getStudents = $dbh->prepare($sql) ;
$getStudents->execute();
?>
