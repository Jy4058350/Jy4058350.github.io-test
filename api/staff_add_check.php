<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>staff_add_check.php</title>
</head>

<body>
    <?php
    session_start();

    // reCAPTCHAのレスポンスを取得
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // reCAPTCHAのレスポンスを検証
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6Lfu4s4pAAAAAPvQj28IbFMfRDA8UIvw2yDxlKuR&response=' . $recaptcha_response);
    $responseData = json_decode($verifyResponse);

    if (!$responseData->success) {
        print 'reCAPTCHA認証に失敗しました。';
        exit();
    } else {
        //前の画面からデータを受け取る
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



        // チェックがokであれば、セッションにデータを保存
        $_SESSION["staff_lastName"] = $staff_lastName;
        $_SESSION["staff_firstName"] = $staff_firstName;
        $_SESSION["staff_pass"] = $staff_pass;
        // test_add_done.phpにデータをリダイレクト
        // header('Location: staff_add_done.php');
        header('Location:../php/staff_add_robo.php');
        exit();
    }
    ?>
</body>

</html>