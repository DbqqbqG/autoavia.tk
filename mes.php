<?php
$fo = fopen("messages.txt", "r");
echo fread($fo, filesize("messages.txt")); ;
fclose($fo);

