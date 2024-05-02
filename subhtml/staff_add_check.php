<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP practice</title>
</head>

<body>

    <?php

    // session_start();
    // session_regenerate_id(true);
    // if (isset($_SESSION['login']) == false) {
    //     print 'ログインされていません。<br />';
    //     print '<a href="../staff_login/staff_login.html">ログイン画面へ</a>';
    //     exit();
    // } else {
    //     print $_SESSION['staff_name'];
    //     print 'さんログイン中<br />';
    //     print '<br />';
    // }
    // require_once('../common/common.php');

    // $post = sanitize($_POST);

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


    if ($staff_lastName == '') {
        print 'スタッフ名が入力されていません。<br>';
    } else {
        print 'スタッフ姓:';
        print $staff_lastName;
        print '<br>';
    }

    if ($staff_firstName == '') {
        print 'スタッフ名が入力されていません。<br>';
    } else {
        print 'スタッフ名:';
        print $staff_firstName;
        print '<br>';
    }

    if ($staff_pass == '') {
        print 'パスワードが入力されていません。<br>';
    }

    if ($staff_pass != $staff_pass2) {
        print 'パスワードが一致しません。<br>';
    }

    // Use history.back() to go back to the previous page without losing the data
    if ($staff_lastName == '' || $staff_firstName == '' || $staff_pass == '' || $staff_pass != $staff_pass2) {
        print '<form>';
        print '<input type="button" onclick="history.back()" value="戻る">';
        print '</form>';
    } else {


        // Use md5 to encrypt the password but it is not safe
        $staff_pass = md5($staff_pass);
        print '<form method="post" action="staff_add_done.php">';
        print '<input type="hidden" name="code" value="' . $staff_code . '">';
        print '<input type="hidden" name="name" value="' . $staff_lastName . '">';
        print '<input type="hidden" name="pass" value="' . $staff_pass . '">';
        print '<br>';
        print '<input type="button" onclick="history.back()" value="戻る">';
        print '<input type="submit" value="OK">';
        print '</form>';
    }

    ?>

</body>

</html>