<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP practice</title>
</head>

<body>

    <?php

    $mbango = $_POST['mbango'];

    $hoshi["m1"] = 'カニ星雲';
    $hoshi["m31"] = 'アンドロメダ大星雲';
    $hoshi["m42"] = 'オリオン大星雲';
    $hoshi["m45"] = 'すばる';
    $hoshi["m57"] = 'ドーナツ星雲';

    foreach ($hoshi as $key => $val) {
        print $key . "は" . $val;
        print '<br/>';
    }


    print 'あなたが選んだ星は、';
    print $hoshi[$mbango];

    ?>

</body>

</html>