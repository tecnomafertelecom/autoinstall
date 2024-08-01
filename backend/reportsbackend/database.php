<?php 
set_time_limit(0);
class Database
{
    private $user ;
    private $host;
    private $pass ;
    private $db;
    private $connection;

    public function __construct($db)
    { 
        function getMysqlRootPassword($configFile = '/etc/issabel.conf') {
            // Verifica se o arquivo existe e é legível
            if (!file_exists($configFile) || !is_readable($configFile)) {
                throw new Exception("O arquivo $configFile não existe ou não pode ser lido.");
            }
        
        
            $lines = file($configFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                // Verifica se a linha contém a string 'mysqlrootpwd'
                if (strpos($line, 'mysqlrootpwd') !== false) {
                    // Divide a linha pelo caractere '='
                    list($key, $password) = explode('=', $line, 2);
                    // Remove espaços em branco ao redor da senha
                    $password = trim($password);
                    return $password;
                }
            }
        
        
            throw new Exception("Não foi possível encontrar a senha mysqlrootpwd no arquivo $configFile.");
        }
        
        try {
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $this->user = "root";
            $this->host = "localhost";
            $this->pass= getMysqlRootPassword();
            $this->db = $db;
        
            $this->connection = new mysqli($this->host, $this->user, $this->pass, $this->db);
            $this->connection->set_charset("utf8mb4");
        } catch (mysqli_sql_exception $e) {
            throw new Exception("Falha na conexão com o banco de dados: " . $e->getMessage());
        }
    }
    
    public function query($query){
        $result = $this->connection->query($query, MYSQLI_USE_RESULT);
        $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
        if(isset($rows))
        return json_encode($rows);
    else 
    return json_encode([]);
}

    function __destruct() {
        $this->connection->close();
     }
}