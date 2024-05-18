<?php

// At the beginning of your PHP script
error_log(print_r($_POST, true));

header('Content-Type: application/json; charset=UTF-8');

session_start();
try {

    $staff_code = $_POST['staff_code'];
    $operation_type = $_POST['operation_type'];







    if (!isset($_POST['operation_type'])) {
        // Handle the case where operation_type is not set in the POST request
        echo json_encode(['error' => 'operation_type is not set in the POST request']);
        exit();
    }

    // $operation_type = $_POST['operation_type'];

    if ($operation_type !== 'edit' && $operation_type !== 'delete' && $operation_type !== 'add' && $operation_type !== 'disp') {
        // Handle the case where operation_type is neither 'edit' nor 'delete'
        echo json_encode(['error' => 'operation_type is neither edit nor delete']);
        exit();
    }



    $dsn = 'mysql:dbname=themShop;host=localhost;charset=utf8';
    $user = 'root';
    $password = '';
    $dbh = new PDO($dsn, $user, $password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = 'SELECT last_name ,first_name ,password FROM mst_staff WHERE code=?';
    $stmt = $dbh->prepare($sql);
    $data[] = $staff_code;
    $stmt->execute($data);

    $rec = $stmt->fetch(PDO::FETCH_ASSOC);
    $staff_lastName = $rec['last_name'];
    $staff_firstName = $rec['first_name'];
    // get password
    $staff_password = $rec['password'];



    $dbh = null;

    $operation_type = $_POST['operation_type']; // Add this line このコードに汎用性を持たせるために、operation_typeを追加する

    if ($operation_type === 'edit') {
        $legend = "スタッフコード" . $staff_code . "の情報を変更します";
    } else if ($operation_type === 'delete') {
        $legend = "スタッフコード" . $staff_code . "の情報を削除します";
    } else if ($operation_type === 'add') {
        $legend = "スタッフコード" . $staff_code . "の情報を追加します";
    } else if ($operation_type === 'disp') {
        $legend = "スタッフコード" . $staff_code . "の情報を参照します";
    }

    // Create an array with the data
    $staff_data = array(
        "title" => "スタッフ編集",
        "legend" => $legend,
        "staffcode" => $staff_code,
        "last_name" => $staff_lastName,
        "first_name" => $staff_firstName,
        "operation_type" => $operation_type,
        "password" => $staff_password,
    );

    // Log the value of legend
    error_log("Legend: " . $staff_data["legend"]);

    // Convert the array to a JSON string
    $json_staff_data = json_encode($staff_data);

    // Output the JSON string
    echo $json_staff_data;
} catch (Exception $e) {
    http_response_code(500);
    print 'ただいま障害により大変ご迷惑をおかけしています。';
    exit();
}
