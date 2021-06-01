<?php
$dbh = new PDO("mysql:host=localhost;dbname=school","root","");
$sql = " SELECT * FROM students ";
$usbQuery = $dbh->query($sql);
$getusb = $usbQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getusb));
?>
