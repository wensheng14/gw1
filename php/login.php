<?php
  // * 代表接受任意域的请求
  header('Access-Control-Allow-Origin:*');
  $username = $_POST['name'];
  $userPwd = $_POST['pwd'];
  //设置响应头(编码格式)
  header("Content-Type:text/html;charset=utf-8");
  $connect = mysqli_connect('localhost','root','123456','test');  //建立数据库连接
  // 设置数据库连接字符集utf8
  mysqli_set_charset($connect,"utf8");
  $res = mysqli_query($connect,"select * from login where username ='$username'");
  $row = mysqli_fetch_assoc($res); //获取sql数据
  if($row){
    if($row['userpwd'] == $userPwd ){
      echo  'success';
    }else{
      echo 'failure';
    }
  }else{
    echo 'null';
  }
?>
