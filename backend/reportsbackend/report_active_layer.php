<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$noAnswered = $_POST['noanswered'];
$busy = $_POST['busy'];
$tel = $_POST['tel'];

$connection = new Database('asteriskcdrdb');

$query = "
SELECT 
date_format(calldate, '%d-%m-%Y %h:%i:%s') as Data, 
src as Origem,
case when dst = 's' then 'Fila'
     else dst end as Destino,
SEC_TO_TIME(duration) as 'Duração',
case when disposition = 'ANSWERED' then 'Atendida'
     when disposition = 'NO ANSWER' then 'Não Atendidas'
     when disposition = 'FAILED' then 'Falha'
     when disposition = 'BUSY' then 'Ocupada'
end as Evento
FROM cdr 
where 
cast(calldate as datetime) between '" . $time1 . "' and '" . $time2 . "'
and disposition in ('ANSWERED'";

if($noAnswered == true)
  $query .= ", 'NO ANSWER'";

if($busy == true)
  $query .= ", 'BUSY'";

  $query .= ") ";

if(!empty($tel))
 $query .= " and dst = '" .$tel . "'";

$query .= " order by calldate";

$query .= " LIMIT 1000";

$result = $connection->query($query);

echo $result;