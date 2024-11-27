<?php
require 'koneksi.php';
$username = $_POST["username"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($db, $query_sql);

if(mysqli_num_rows($result) > 0) {
    header("location: tampilanAwal.html");
} else {
    echo "<center><h1>Username Atau Password Anda Salah. Silakan Coba Login Kembali.</h1><button><strong><a href='index.php'>login</a></strong></button></center>";
};

?>