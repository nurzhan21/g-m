<?php 
    $tel = $_POST['tel'];
    $tel = htmlspecialchars($tel);
    $tel = urldecode($tel);
    $tel = trim($tel);

    if(mail("info@goldenmebel.kz",
            "Новая заявка от клиента",
            "Телефон: " .$tel,
            "From: info@goldenmebel.kz \r\n")
    ) 
?>