    <?php
    session_start();

    require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';


    // $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));

    $dotenv = Dotenv\Dotenv::createImmutable(dirname(dirname(__DIR__)), '.env.development');

    $dotenv->load();

    // $db_host = getenv('DB_HOST');
    // $db_name = getenv('DB_NAME');
    // $db_user = getenv('DB_USER');

    // $db_password = getenv('DB_PASS');




    try {
        $staff_code = $_SESSION['staff_code'];

        $dsn = 'mysql:dbname=themShop;host=localhost;charset=utf8';
        // $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
        $user = 'root';
        // $user = $db_user;
        $password = '';
        $dbh = new PDO($dsn, $user, $password);
        // $dbh = new PDO($dsn, $db_user, $db_password);
        // $dbh = new PDO($dsn, $db_user, $password);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = 'delete from mst_staff where code=?';
        $stmt = $dbh->prepare($sql);
        $data[] = $staff_code;
        $stmt->execute($data);

        $dbh = null;

        $data = [
            "message" => "スタッフ" . $staff_code . "を削除しました",
     
        ];
        header('Content-Type: application/json');
        echo json_encode($data);
    } catch (PDOException $e) {
        $errorData = [
            "message" => "ただいま障害により大変ご迷惑をおかけしています。",
            "error" => "Error" . $e->getMessage(),
        ];
        header('Content-Type: application/json');
        echo json_encode($errorData);
        exit();
    }

    ?>
   