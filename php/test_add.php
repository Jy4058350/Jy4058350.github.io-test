<?php

?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP practice</title>
    <script src="https://www.google.com/recaptcha/api.js?render=6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ"></script>
    <script>
        grecaptcha.ready(function() {
            grecaptcha.execute('6Le3yswpAAAAAEijcq6d3XaAvtgU5JN7TLNF5HRJ', {
                action: 'submit'
            }).then(function(token) {
                document.getElementById('g-recaptcha-response').value = token;
            });
        });
    </script>
</head>

<body>
    スタッフ追加<br>
    <br>
    <form method="post" action="test_add_check.php">
        スタッフ名を入力してください。<br>
        <input type="text" name="name" style="width:200px"><br>
        パスワードを入力してください。<br>
        <input type="password" name="pass" style="width:100px"><br>
        パスワードをもう一度入力してください。<br>
        <input type="password" name="pass2" style="width:100px"><br>
        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
        <br>
        <input type="button" onclick="history.back()" value="戻る">
        <input type="submit" value="OK">
    </form>

</body>

</html>