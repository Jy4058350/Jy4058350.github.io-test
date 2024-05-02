<?php
session_start();
session_regenerate_id(true);
if (isset($_SESSION['login']) == false) {
  print 'ログインされていません。<br />';
  print '<a href="../staff_login/staff_login.html">ログイン画面へ</a>';
  exit();
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP practice</title>
</head>

<body>
  ショップ管理トップメニュー<br />
  <br />
  <a href="../staff/staff_list.php">スタッフ管理</a><br />
  <br />
  <a href="../product/pro_list.php">商品管理</a><br />
  <br />
  <a href="staff_logout.php">ログアウト</a><br />

</body>

</html>