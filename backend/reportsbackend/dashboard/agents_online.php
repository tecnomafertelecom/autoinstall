<?php

require_once '../shared_config.php';

require '../database.php';

$connection = new Database('call_center');

$query = "select ( select count(*) from call_center.audit a inner join call_center.agent a2 on 
            a.id_agent = a2.name 
            or a.id_agent = a2.id 
            and DATE_FORMAT(a.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')  
            and a.datetime_end is null 
            and a.id_break is null 
        where 
            a2.name = aaa.name 
            order by 1 desc limit 1 
            )";

$query .= "+";

$query .= "(
    select 
        count(*) 
    from 
        call_center.audit a 
    inner join call_center.agent a22 on 
        a.id_agent = a22.name 
        or a.id_agent = a22.id  
        and DATE_FORMAT(a.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y') 
        and a.datetime_end is null 
        and a.id_break is not null 
    where 
        a22.name = aaa.name 
        order by 1 desc limit 1 
        ) as status 
from 
    call_center.agent aaa 
    where aaa.id in ( 
    select filtro.id_agent from 
        call_center.audit filtro where  DATE_FORMAT(filtro.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y') 
        group by filtro.id_agent 
        )  group by aaa.name";

$result = $connection->query($query);
        
echo $result;
