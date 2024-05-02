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

        $pro_code = $_GET['procode'];

        $dsn = 'mysql:dbname=shop;host=localhost;charset=utf8';
        $user = 'root';
        $password = '';
        $dbh = new PDO($dsn, $user, $password);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = 'SELECT name,price,gazou FROM mst_product WHERE code=?';
        $stmt = $dbh->prepare($sql);
        $data[] = $pro_code;
        $stmt->execute($data);

        $rec = $stmt->fetch(PDO::FETCH_ASSOC);
        $pro_name = $rec['name'];
        $pro_price = $rec['price'];
        $pro_gazou_name = $rec['gazou'];

        $dbh = null;

        if ($pro_gazou_name == '') {
            $disp_gazou = '';
            error_log('gazou is empty');
        } else {
            $disp_gazou = '<img src="../product/gazou/' . $pro_gazou_name . '">';
            error_log('gazou is not empty');
        }
        print '<a href="shop_cartin.php?procode=' . $pro_code . '">カートに入れる</a><br /><br />';
    } catch (Exception $e) {
        print 'ただいま障害により大変ご迷惑をおかけしています。';
        exit();
    }

    ?>

    商品情報参照<br>
    <br>
    商品コード<br>
    <?php print htmlspecialchars($pro_code, ENT_QUOTES, 'UTF-8'); ?>
    <br>
    商品名<br>
    <?php print htmlspecialchars($pro_name, ENT_QUOTES, 'UTF-8'); ?>
    <br>
    価格<br>
    <?php print htmlspecialchars($pro_price, ENT_QUOTES, 'UTF-8'); ?>円
    <br>

    <?php print $disp_gazou; ?>
    <br>
    <form>
        <input type="button" onclick="history.back()" value="戻る">
    </form>


</body>

</html>