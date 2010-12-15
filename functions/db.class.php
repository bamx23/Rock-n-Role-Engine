<?php
class DB{
    public static $instance;
    private $MySQLi;
    
    private function __construct($dbOptions) {
        $this->MySQLi = @ new mysqli(    $dbOptions['db_host'],
                        $dbOptions['db_user'],
                        $dbOptions['db_pass'],
                        $dbOptions['db_name'] );
                        
        if (mysqli_connect_errno()) {
            throw new Exception('Ошибка базы данных.');
        } 
        
        $this->MySQLi->set_charset("utf8");
    }
    
    public static function init(array $dbOptions){
        if(self::$instance instanceof self){
            return false;
        }
        self::$instance = new self($dbOptions);
    }
    
    public static function query($s) {
        return self::$instance->MySQLi->query($s);
    }
}
?>