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
    try {
        $staff_code = $_POST['code'];

        /*
        This PHP code is used to establish a connection to a MySQL
        database using the PHP Data Objects (PDO) extension.
        */
        $dsn = 'mysql:dbname=shop;host=localhost;charset=utf8';
        $user = 'root';
        $password = '';
        $dbh = new PDO($dsn, $user, $password);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        /*
        This PHP code is used to insert a new record into a MySQL database 
        using the PHP Data Objects (PDO) extension.
        */
        // $sql = 'INSERT INTO mst_staff(name,password) VALUES (?,?)';
        $sql = 'delete from mst_staff where code=?';
        $stmt = $dbh->prepare($sql);
        $data[] = $staff_code;
        $stmt->execute($data);

        $dbh = null;
    } catch (Exception $e) {
        print 'ただいま障害により大変ご迷惑をおかけしています。';
        exit();
    }

    ?>
    削除しました。<br>
    <br>
    <a href="staff_list.php">戻る</a>

</body>

</html>