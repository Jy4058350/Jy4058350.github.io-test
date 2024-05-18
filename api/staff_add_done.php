<?php
session_start();
try {

    //前の画面からデータを受け取る
    $staff_lastName = $_SESSION['staff_lastName'];
    $staff_firstName = $_SESSION['staff_firstName'];
    $staff_pass = $_SESSION['staff_pass'];

    $staff_pass = password_hash($staff_pass, PASSWORD_DEFAULT);

    $staff_lastName = htmlspecialchars($staff_lastName, ENT_QUOTES, 'UTF-8');
    $staff_firstName = htmlspecialchars($staff_firstName, ENT_QUOTES, 'UTF-8');
    // $staff_pass = htmlspecialchars($staff_pass, ENT_QUOTES, 'UTF-8');
    /*
        This PHP code is used to establish a connection to a MySQL
        database using the PHP Data Objects (PDO) extension.
        */
    $dsn = 'mysql:dbname=themShop;host=localhost;charset=utf8';
    $user = 'root';
    $password = '';
    $dbh = new PDO($dsn, $user, $password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /*
        This PHP code is used to insert a new record into a MySQL database 
        using the PHP Data Objects (PDO) extension.
        */
    $sql = 'INSERT INTO mst_staff(last_name,first_name,password) VALUES (?,?,?)';
    $stmt = $dbh->prepare($sql);
    $data[] = $staff_lastName;
    $data[] = $staff_firstName;
    $data[] = $staff_pass;
    $stmt->execute($data);
    $dbh = null;

    // Prepare the data
    $data = [
        "message" => $staff_lastName . " " . $staff_firstName . "さんを追加しました。",
    ];
    // Set the Content-Type to application/json
    header('Content-Type: application/json');
    // Output the data as JSON
    echo json_encode($data);
} catch (Exception $e) {
    // Prepare the error data
    $errorData = [
        "message" => "ただいま障害により大変ご迷惑をおかけしています。",
        "error" => "Error" . $e->getMessage(),
    ];
    // Set the Content-Type to application/json
    header('Content-Type: application/json');
    // Output the data as JSON
    echo json_encode($errorData);
    exit();
}
