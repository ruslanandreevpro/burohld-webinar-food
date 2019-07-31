<?

$name = htmlspecialchars($_GET['name'], ENT_NOQUOTES, 'UTF-8');
$phone = htmlspecialchars($_GET['tel'], ENT_NOQUOTES, 'UTF-8');
$email = htmlspecialchars($_GET['email'],ENT_NOQUOTES,'UTF-8');

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "sprut1980@gmail.com";

$tema = "Новая заявка";
$message_to_myemail = "Поступила новая заявка:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $phone<br>
";

mail($myemail, $tema, $message_to_myemail, "From: BuroHld <info@buromsk.ru> \r\n Reply-To: BuroHld \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
header("Location: thanks.html");

?>