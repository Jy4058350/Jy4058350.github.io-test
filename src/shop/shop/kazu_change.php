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

    require_once('../common/common.php');

    $post = sanitize($_POST);

    $max = $post['max'];
    for ($i = 0; $i < $max; $i++) {
        $kazu[] = $post['kazu' . $i];
    }

    $_SESSION['kazu'] = $kazu;

    header('Location: shop_cartlook.php');
    exit();

    ?>
</body>

</html>