<?php
    // variables start
	$companyName = "";
	$website = "";
	$industry = "";
	$country = "";
	$name = "";
	$title = "";
	$email = "";
	$contactYou = "";
	$queston1= "";
	$queston2= "";
	$queston3= "";
	
	$companyName =  trim($_POST['partnerCompanyname']);
	$website =  trim($_POST['partnerWebsite']);
	$industry =  trim($_POST['partnerIndustry']);
	$country =  trim($_POST['partnerGeographic']);
	$name =  trim($_POST['partnerName']);
	$title =  trim($_POST['partnerTitle']);
	$email =  trim($_POST['partnerEmailField']);
	$contactYou =  trim($_POST['partnerBestWay']);
	$question1 =  trim($_POST['partnerQuestion1']);
	$question2 =  trim($_POST['partnerQuestion2']);
	$question3 =  trim($_POST['partnerQuestion3']);
	// variables end
	
	// email address to send to
	$emailAddress = 'kharronreid@gmail.com';
	
	$subject = "Message From: $name";	
	$message = "<strong>From:</strong> $name <br/><br/>";
  $message .= "<strong>Company Name:</strong> $companyName <br /><br />";
  $message .= "<strong>Website:</strong> $website <br /><br />";
  $message .= "<strong>Industry:</strong> $industry <br /><br />";
  $message .= "<strong>Country:</strong> $country <br /><br />";
  $message .= "<strong>Name:</strong> $name <br /><br />";
  $message .= "<strong>Title:</strong> $title <br /><br />";
  $message .= "<strong>Email:</strong> $email <br /><br />";
  $message .= "<strong>Best way to contact you:</strong> $contactYou <br /><br />";
  $message .= "<strong>Question 1:</strong> $question1 <br /><br />";
  $message .= "<strong>Question 2:</strong> $question2 <br /><br />";
  $message .= "<strong>Question 3:</strong> $question3 <br /><br />";
	
	$headers .= 'From: '. $name . '<' . $email . '>' . "\r\n";
	$headers .= 'Reply-To: ' . $email . "\r\n";
	
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	//send email function starts
	mail($emailAddress, $subject, $message, $headers);
	//send email function ends
?>
