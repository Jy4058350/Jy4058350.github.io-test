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
    if (isset($_SESSION['member_login']) == false) {
        print 'ようこそゲスト様  ';
        print '<a href="member_login.html">会員ログイン</a><br />';
        print '<br />';
    } else {
        print 'ようこそ<br />';
        print $_SESSION['member_name'];
        print '様 <br />';
        print '<a href="member_logout.php">ログアウト</a><br />';
        print '<br />';
    }
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    ?>

    <?php
    try {

        $cart = $_SESSION['cart'];
        $kazu = $_SESSION['kazu'];
        $max = count($cart);

        $dsn = 'mysql:dbname=shop;host=localhost;charset=utf8';
        $user = 'root';
        $password = '';
        $dbh = new PDO($dsn, $user, $password);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        foreach ($cart as $key => $value) {
            $sql = 'SELECT code,name,price,gazou FROM mst_product WHERE code=?';
            $stmt = $dbh->prepare($sql);
            $data[0] = $value;
            $stmt->execute($data);

            $rec = $stmt->fetch(PDO::FETCH_ASSOC);

            $pro_name[] = $rec['name'];
            $pro_price[] = $rec['price'];

            if ($rec['gazou'] == '') {
                $pro_gazou[] = '';
            } else {
                $pro_gazou[] = '<img src="../product/gazou/' . $rec['gazou'] . '">';
            }
        }
        $dbh = null;
    } catch (Exception $e) {
        print 'ただいま障害により大変ご迷惑をおかけしています。';
        exit();
    }

    ?>
    カートの中身<br />
    <br />
    <form method="post" action="kazu_change.php">
        <?php for ($i = 0; $i < $max; $i++) {
        ?>
            <?php print $pro_name[$i]; ?>
            <?php print $pro_gazou[$i]; ?>
            <?php print $pro_price[$i]; ?>円
            <!-- <?php print $kazu[$i]; ?>個 -->
            <input type="text" name="kazu<?php print $i; ?>" value="<?php print $kazu[$i]; ?>">
            <br />
        <?php
        }
        ?>
        <input type="hidden" name="max" value="<?php print $max; ?>">
        <input type="submit" value="数量変更"><br>
        <input type="button" onclick="history.back()" value="戻る">
    </form>


</body>

</html>