<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$agent = $_POST['agent'];

$connection = new Database('call_center');

$query = "
SELECT 
    DATE_FORMAT(ad.datetime_init, '%d-%m-%Y %h:%i:%s') AS 'Data', 
    ag.name AS 'Agentes', -- Use o campo 'name' em vez de 'number'
    'Pausa' AS 'Eventos',
    br.description AS 'Pausas',
    ad.duration AS 'Tempo',
    DATE_FORMAT(ADDTIME(ad.datetime_init, ad.duration), '%d-%m-%Y %h:%i:%s') AS 'Fim Pausa'
FROM audit ad
INNER JOIN agent ag ON ad.id_agent = ag.id
INNER JOIN break br ON br.id = ad.id_break ";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(ad.datetime_end as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($agent)){
 $query .= " and ag.name = '". $agent ."'";
}

$result = $connection->query($query);

echo $result;