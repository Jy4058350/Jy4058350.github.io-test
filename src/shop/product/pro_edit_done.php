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
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    try {
        require_once('../common/common.php');
        $post = sanitize($_POST);

        //前の画面からデータを受け取る
        $pro_code = $post['code'];
        $pro_name = $post['name'];
        $pro_price = $post['price'];
        $pro_gazou_name = $post['gazou_name'];
        $pro_gazou_name_old = $post['gazou_name_old'];

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
        $sql = 'UPDATE mst_product SET name=?,price=?,gazou=?  WHERE code=?';
        $stmt = $dbh->prepare($sql);
        $data[] = $pro_name;
        $data[] = $pro_price;
        $data[] = $pro_gazou_name;
        $data[] = $pro_code;



        $stmt->execute($data);

        $dbh = null;

        if ($pro_gazou_name_old != $pro_gazou_name) {
            if ($pro_gazou_name_old != '') {
                unlink('./gazou/' . $pro_gazou_name_old);
            }
        }

        print '修正しました。<br>';
    } catch (Exception $e) {
        print 'ただいま障害により大変ご迷惑をおかけしています。';
        print 'Error: ' . $e->getMessage(); // e is exception object
        exit();
    }

    ?>

    <br>
    <a href="pro_list.php">戻る</a>

</body>

</html>