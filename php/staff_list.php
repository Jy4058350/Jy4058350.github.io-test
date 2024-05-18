""
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

    try {

        $dsn = 'mysql:dbname=themShop;host=localhost;charset=utf8';
        $user = 'root';
        $password = '';
        $dbh = new PDO($dsn, $user, $password);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = 'SELECT code, last_name, first_name FROM mst_staff WHERE 1';
        $stmt = $dbh->prepare($sql);
        $stmt->execute();

        $dbh = null;

        print 'スタッフ一覧<br><br>';

        print '<form method="post" action="">';

        while (true) {
            $rec = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($rec == false) {
                break;
            }
            // print '<input type="radio" name="staffcode" value="' . $rec['code'] . '">';
            print '<input type="radio" name="staffcode" value="' . $rec['code'] . '"data-lastname="' . $rec['last_name'] . '"data-firstname="' . $rec['first_name'] . '">';
            print $rec['last_name'] . ' ' . $rec['first_name'];

            print '<br>';
        }

        print '<input type="submit" name="disp" value="参照">';
        print '<input type="submit" name="add" value="追加">';
        print '<input type="submit" name="edit" value="修正">';
        print '<input type="submit" name="delete" value="削除">';
        print '</form>';
    } catch (Exception $e) {
        print 'ただいま障害により大変ご迷惑をおかけしています。';
        exit();
    }

    ?>

    <br>
    <a href="../staff_login/staff_top.php">トップメニューへ</a><br>

</body>

</html>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('form');
        const dispButton = document.querySelector('input[name="disp"]');
        const addButton = document.querySelector('input[name="add"]');
        const editButton = document.querySelector('input[name="edit"]');
        const deleteButton = document.querySelector('input[name="delete"]');
        addButton.addEventListener("click", function() {
            event.preventDefault();
            form.action = "staff_add.php";
            form.submit();
        });
        dispButton.addEventListener("click", function() {
            event.preventDefault();
            let staffcodeElement = document.querySelector('input[name="staffcode"]:checked');
            //Check if a staff is selected
            if (!staffcodeElement) {
                window.location.href = "../php/staff_list_robo.php"
                return;
            }
            let staffcode = staffcodeElement.value;
            let lastname = staffcodeElement.dataset.lastname;
            let firstname = staffcodeElement.dataset.firstname;

            // let formData = new FormData(event.target);
            let formData = new FormData(form);
            formData.append('staff_code', staffcode);
            formData.append('last_name', lastname);
            formData.append('first_name', firstname);
            formData.append('operation_type', 'disp') // Add this line to specify the operation type

            // Send a POST request to PHP2
            fetch('../api/getStaffInfo.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    console.log('Response:', response);
                    return response.json()
                })
                .then(data => {
                    console.log('Success:', data);
                    if (data.staffcode) {
                        console.log('Staffcode:', data.staffcode);
                        // このコードは、現在のウェブページを新しいURLにリダイレクトしています。新しいURLはstaff_edit.phpで、その後ろにクエリパラメータstaffcodeが追加されています。staffcodeの値はdata.staffcodeから取得されます。
                        // Redirect to the 'staff_edit.php' page, with the 'staffcode' parameter set to the value of 'data.staffcode'
                        window.location.href = 'staff_disp.php?staffcode=' + data.staffcode;
                    } else {
                        console.log('Staffcode not found');
                    }
                })
                .catch(error => {
                    // Handle any errors
                    console.error('Error:', error);
                });
        });

        editButton.addEventListener("click", function() {
            event.preventDefault();
            let staffcodeElement = document.querySelector('input[name="staffcode"]:checked');
            //Check if a staff is selected
            if (!staffcodeElement) {
                window.location.href = "../php/staff_list_robo.php"
                return;
            }
            let staffcode = staffcodeElement.value;
            let lastname = staffcodeElement.dataset.lastname;
            let firstname = staffcodeElement.dataset.firstname;

            // let formData = new FormData(event.target);
            let formData = new FormData(form);
            formData.append('staff_code', staffcode);
            formData.append('last_name', lastname);
            formData.append('first_name', firstname);
            formData.append('operation_type', 'edit') // Add this line to specify the operation type

            // Send a POST request to PHP2
            fetch('../api/getStaffInfo.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    console.log('Response:', response);
                    return response.json()
                })
                .then(data => {
                    console.log('Success:', data);
                    if (data.staffcode) {
                        console.log('Staffcode:', data.staffcode);
                        // このコードは、現在のウェブページを新しいURLにリダイレクトしています。新しいURLはstaff_edit.phpで、その後ろにクエリパラメータstaffcodeが追加されています。staffcodeの値はdata.staffcodeから取得されます。
                        // Redirect to the 'staff_edit.php' page, with the 'staffcode' parameter set to the value of 'data.staffcode'
                        window.location.href = 'staff_edit.php?staffcode=' + data.staffcode;
                    } else {
                        console.log('Staffcode not found');
                    }
                })
                .catch(error => {
                    // Handle any errors
                    console.error('Error:', error);
                });
        });
        deleteButton.addEventListener("click", function() {
            event.preventDefault();
            let staffcodeElement = document.querySelector('input[name="staffcode"]:checked');
            //Check if a staff is selected
            if (!staffcodeElement) {
                window.location.href = "../php/staff_list_robo.php"
                return;
            }
            let staffcode = staffcodeElement.value;
            let lastname = staffcodeElement.dataset.lastname;
            let firstname = staffcodeElement.dataset.firstname;

            // let formData = new FormData(event.target);
            let formData = new FormData(form);
            formData.append('staff_code', staffcode);
            formData.append('last_name', lastname);
            formData.append('first_name', firstname);
            formData.append('operation_type', 'delete') // Add this line to specify the operation type

            // Send a POST request to PHP2
            fetch('../api/getStaffInfo.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    console.log('Response:', response);
                    return response.json()
                })
                .then(data => {
                    console.log('Success:', data);
                    if (data.staffcode) {
                        window.location.href = 'staff_delete.php?staffcode=' + data.staffcode;
                    } else {
                        console.log('Staffcode not found');
                    }
                })
                .catch(error => {
                    // Handle any errors
                    console.error('Error:', error);
                });
        })
    });
</script>