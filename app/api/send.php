<?php

$EMAIL_TO = 'info@berndullmann.de';

// Function to send email using PHP's mail() function
function sendEmail($data)
{
    global $EMAIL_TO;

    // Validate the data
    if (!isset($data['firstname']) || !isset($data['lastname']) || !isset($data['email']) || !isset($data['message'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Validation failed: Missing required fields']);
        exit;
    }

    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $email = $data['email'];
    $message = $data['message'];

    // Prepare the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Prepare the email subject and body
    $subject = "Contact Form: $message";
    $body = "
        Name: $firstname $lastname
        Email: $email
        
        Nachricht: $message
    ";

    // Send the email using PHP's mail() function
    if (mail($EMAIL_TO, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
}

// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    sendEmail($data);
} else {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['error' => 'Method Not Allowed']);
}
