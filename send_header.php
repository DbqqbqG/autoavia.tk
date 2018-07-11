<?php

$a = $_POST['adress_from'];
$b = $_POST['adress_to'];
$tel = $_POST['phone'];

$mes =  "||||| От: - " . $a  . ", До: - " .  $b  . " ((( " . $vid . " ---------> Номер:  " . $tel . " . Конец |||||" ;

$fo = fopen("messages.txt", "a");
fwrite($fo, $mes);
fclose($fo);
header('Location: https://autoavia.tk');
die();
?>
