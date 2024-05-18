<?php
session_start();
//前の画面からデータを受け取る
$staff_code = $_POST['staff_code'];
$staff_lastName = $_POST['last_name'];
$staff_firstName = $_POST['first_name'];
$staff_pass = $_POST['password'];
$staff_pass2 = $_POST['password2'];



//入力データに安全対策を施す
// use function htmlspecialchars
$staff_lastName = htmlspecialchars($staff_lastName, ENT_QUOTES, 'UTF-8');
$staff_firstName = htmlspecialchars($staff_firstName, ENT_QUOTES, 'UTF-8');
$staff_pass = htmlspecialchars($staff_pass, ENT_QUOTES, 'UTF-8');
$staff_pass2 = htmlspecialchars($staff_pass2, ENT_QUOTES, 'UTF-8');


$dsn = 'mysql:dbname=themShop;host=localhost;charset=utf8';
$user = 'root';
$password = '';
$dbh = new PDO($dsn, $user, $password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// データベースからスタッフのパスワードを取得
$sql = 'SELECT password FROM mst_staff WHERE code=?';
$stmt = $dbh->prepare($sql);
$stmt->execute([$staff_code]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

// データベースのパスワードとPOSTで送られてきたパスワードを比較
if (!password_verify($staff_pass, $result['password'])) {
    // パスワードが一致しない場合はエラーメッセージを返す
    $errorData = [
        "message" => "パスワードが一致しません。",
    ];
    header('Content-Type: application/json');
    echo json_encode($errorData);
    exit();
}


// チェックがokであれば、セッションにデータを保存
$_SESSION["staff_lastName"] = $staff_lastName;
$_SESSION["staff_firstName"] = $staff_firstName;
$_SESSION["staff_pass"] = $staff_pass;
$_SESSION["staff_code"] = $staff_code;
// test_add_done.phpにデータをリダイレクト
// header('Location: staff_add_done.php');

// header('Location:../php/staff_edit_robo.php');
// exit();

// JSON形式でレスポンスを返す
header('Content-Type: application/json');
echo json_encode($_SESSION);
exit();
?>