<?php
$host = "localhost";
$username = "username";
$password = "password";
$database_name = "bookstore";

$database = new PDO("mysql:host=$host;dbname=$database_name", $username, $password);
$database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
