<?php
//https://api.telegram.org/bot6226896491:AAEd6VrSv01CdKC3b4W0SGu0hkVzWODZOAo/getUpdates,



$name = $_POST['Name'];
$phone = $_POST['phoneNumber'];
$name = $_POST['fanlar'];

$token = "6226896491:AAEd6VrSv01CdKC3b4W0SGu0hkVzWODZOAo";
$chat_id = "-909675952";

$arr = array(
    'Familiya va Ism: ' => $name,
    'Telefon: '=> $phone,
    'Fanlar: ' => $name,
    )

    foreach($arr as $key => $value){
        $txt .="<b>".$key."</b> ".$value."%0A";
    };

    $sendTOTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
    &parse_mode=html&text={$txt}","r");

    if($sendTOTelegram){
        echo '<h1 class="success"> Sizning junatilgan habaringiz uchun rahmat!<h1>';
        return true;
    }else{
     echo "Error"; 
    }
    ?>