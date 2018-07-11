<?php

//простое считывание файла

//$fo = fopen("baza.txt", "r"); //считывание файла, с ключем READ r
/*
echo fread($fo,filesize("baza.txt")); // вывод содержимого файла
fclose($fo); // закрытие файла
*/

//получение строки из файла
/*
echo fgets($fo,256);
*/


//создание файла
$file = "messages.txt";
$hello = fopen($file, "w");



fwrite($hello, "Hello");
fclose($hello);
