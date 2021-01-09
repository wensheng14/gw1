<?php
  session_start();
  // 解决跨域问题
  header('Access-Control-Allow-Origin:*');
  $captcha = $_POST['captcha'];
  $captchaImg = $_SESSION['code'];
  if($captchaImg == $captcha){
    echo 'true';
    $captchaImg = '';
  }else {
    echo 'false';
  }
?>