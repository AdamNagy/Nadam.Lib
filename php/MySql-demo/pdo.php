<?php   
    $host = '127.0.0.1:3306';
    $db   = 'qweasd';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';
    
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
         
        $stmt = $pdo->query('SELECT id, status, description FROM todo');
        while ($row = $stmt->fetch())
        {
            echo "ID :{$row['id']}  <br> ".
                "Status: {$row['status']} <br> ".
                "Description: {$row['description']} <br> ".
                "--------------------------------<br>";
        }
    } catch (\PDOException $e) {
         throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }   
?>