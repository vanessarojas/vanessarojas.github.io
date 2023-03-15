<?php
session_start();
$book_id = $_POST['book_id'];
$_SESSION['cart'][] = $book_id;
header('Location: cart.php');
exit;
?>
