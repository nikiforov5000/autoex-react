<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $phone = htmlspecialchars($_POST["phone"]);

    $to = "dudnikova.marina@gmail.com";
    $subject = "Autoex.kz Form Submission";
    $body = "Name: $name\nEmail: $email \nPhone: $phone\n\nMessage:\n$message";

    $headers = "From: info@autoex.kz\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>