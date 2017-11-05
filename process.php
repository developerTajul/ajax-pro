<h1>Web Developer</h1>

<?php 



$name = $_POST['userName'] ? $_POST['userName'] : 'User is blank';

$email = $_POST['userEmail'] ? $_POST['userEmail'] : 'Email is blank';


echo $name.' <br/> '.$email;