
<?php 
  if(isset($_POST['submit']) && !isset($name_error) && !isset($subject_error) && !isset($email_error) && !isset($message_error)){
    $to = 'dylanlix@gmail.com'; // edit here
    $body = " Name: $name\n E-mail: $email\n Message:\n $message";
    if(mail($to, $subject, $body)){
      echo '<p style="color: green">Message sent</p>';
    }else{
      echo '<p>Error occurred, please try again later</p>';
    }
  }
?>