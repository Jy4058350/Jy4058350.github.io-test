<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP practice</title>
</head>

<body>

    <?php
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    //前の画面からデータを受け取る
    $staff_name = $_POST['name'];
    $staff_pass = $_POST['pass'];
    $staff_pass2 = $_POST['pass2'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaSecretKey = getenv('RECAPTCHA_SECRET_KEY');

    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecretKey . '&response=' . $recaptchaResponse);
    $responseData = json_decode($verifyResponse);
    if (!$responseData->success) {
        print 'reCAPTCHA validation failed. Please try again.';
        exit;
    }
    //入力データに安全対策を施す
    $staff_name = htmlspecialchars($staff_name, ENT_QUOTES, 'UTF-8');
    $staff_pass = htmlspecialchars($staff_pass, ENT_QUOTES, 'UTF-8');
    $staff_pass2 = htmlspecialchars($staff_pass2, ENT_QUOTES, 'UTF-8');

    if ($staff_name == '') {
        print 'スタッフ名が入力されていません。<br>';
    } else {
        print 'スタッフ名:';
        print $staff_name;
        print '<br>';
    }
    if ($staff_pass == '') {
        print 'パスワードが入力されていません。<br>';
    }
    if ($staff_pass != $staff_pass2) {
        print 'パスワードが一致しません。<br>';
    }
    // Use history.back() to go back to the previous page without losing the data
    if ($staff_name == '' || $staff_pass == '' || $staff_pass != $staff_pass2) {
        print '<form>';
        print '<input type="button" onclick="history.back()" value="戻る">';
        print '</form>';
    } else {
        // Use password_hash to encrypt the password
        $staff_pass = password_hash($staff_pass, PASSWORD_DEFAULT);
        print '<form method="post" action="staff_add_done.php">';
        print '<input type="hidden" name="name" value="' . $staff_name . '">';
        print '<input type="hidden" name="pass" value="' . $staff_pass . '">';
        print '<br>';
        print '<input type="button" onclick="history.back()" value="戻る">';
        print '<input type="submit" value="OK">';
        print '</form>';
    }
    ?>
</body>

</html>