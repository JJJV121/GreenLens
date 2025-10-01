<?php
include "../db_connect.php";

if(isset($_POST['user_id'])){
    $id = $_POST['user_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    $conn->query("UPDATE users SET name='$name', email='$email' WHERE id='$id'");
    echo "success";
}
?>
