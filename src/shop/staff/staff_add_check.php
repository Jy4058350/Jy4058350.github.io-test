<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP practice</title>
</head>

<body>

    <?php

    session_start();
    session_regenerate_id(true);
    if (isset($_SESSION['login']) == false) {
        print 'ログインされていません。<br />';
        print '<a href="../staff_login/staff_login.html">ログイン画面へ</a>';
        exit();
    } else {
        print $_SESSION['staff_name'];
        print 'さんログイン中<br />';
        print '<br />';
    }
    require_once('../common/common.php');

    $post = sanitize($_POST);

    //前の画面からデータを受け取る
    $staff_name = $post['name'];
    $staff_pass = $post['pass'];
    $staff_pass2 = $post['pass2'];

    //入力データに安全対策を施す
    // use function htmlspecialchars


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


        // Use md5 to encrypt the password but it is not safe
        $staff_pass = md5($staff_pass);
        print '<form method="post" action="staff_add_done.php">';
        print '<input type="hidden" name="code" value="' . $staff_code . '">';
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