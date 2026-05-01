<?php
/**
 * SAGE Cleaning Contact Form Handler
 * Email via sender.net SMTP
 */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method not allowed');
}

header('Content-Type: application/json');

// ─── Configuration — fill in your sender.net credentials ─────────────────────
define('SMTP_HOST',     'smtp.sender.net');
define('SMTP_PORT',     587);
define('SMTP_SECURE',   'tls');
define('SMTP_USERNAME', 'YOUR_SENDER_NET_USERNAME');   // your sender.net login
define('SMTP_PASSWORD', 'YOUR_SENDER_NET_PASSWORD');   // your sender.net password
define('FROM_EMAIL',    'yoursagecleaning@gmail.com'); // verified sender address
define('FROM_NAME',     'SAGE Cleaning Website');
define('TO_EMAIL',      'yoursagecleaning@gmail.com'); // where form submissions go
// ─────────────────────────────────────────────────────────────────────────────

$response = ['success' => false, 'error' => null];

try {
    // Honeypot spam check
    if (!empty($_POST['website'])) {
        throw new Exception('Spam detected');
    }

    // Sanitize inputs
    $name    = htmlspecialchars(trim($_POST['name']    ?? ''), ENT_QUOTES, 'UTF-8');
    $email   = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars(trim($_POST['phone']   ?? ''), ENT_QUOTES, 'UTF-8');
    $service = htmlspecialchars(trim($_POST['service'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

    // Validate
    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception('Please fill in all required fields.');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address.');
    }

    // Build email
    $subject = 'New Quote Request from ' . $name . ' — SAGE Cleaning';

    $body = "
    <html><head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .wrap { max-width: 560px; margin: 0 auto; }
        .header { background: #093626; color: white; padding: 24px; text-align: center; }
        .header h2 { margin: 0; font-size: 20px; }
        .gold { color: #D1AF60; }
        .body { background: #FAF9F6; padding: 24px; margin-top: 0; }
        .field { margin-bottom: 16px; }
        .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px; }
        .value { font-size: 15px; }
        .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 11px; color: #999; }
    </style>
    </head><body>
    <div class='wrap'>
        <div class='header'>
            <h2><span class='gold'>SAGE</span> Cleaning — New Quote Request</h2>
        </div>
        <div class='body'>
            <div class='field'>
                <span class='label'>Name</span>
                <span class='value'>{$name}</span>
            </div>
            <div class='field'>
                <span class='label'>Email</span>
                <span class='value'><a href='mailto:{$email}'>{$email}</a></span>
            </div>
            " . ($phone ? "<div class='field'><span class='label'>Phone</span><span class='value'>{$phone}</span></div>" : '') . "
            " . ($service ? "<div class='field'><span class='label'>Service Requested</span><span class='value'>{$service}</span></div>" : '') . "
            <div class='field'>
                <span class='label'>Message</span>
                <span class='value'>" . nl2br($message) . "</span>
            </div>
        </div>
        <div class='footer'>Sent from yoursagecleaning.com contact form</div>
    </div>
    </body></html>
    ";

    $sent = sendViaSMTP(TO_EMAIL, $subject, $body, $email);

    if ($sent) {
        $response['success'] = true;
    } else {
        throw new Exception('Failed to send. Please call us at 307-254-5338.');
    }

} catch (Exception $e) {
    $response['error'] = $e->getMessage();
    error_log('SAGE Contact Form Error: ' . $e->getMessage());
}

echo json_encode($response);
exit;


// ─── SMTP sender ─────────────────────────────────────────────────────────────

function sendViaSMTP($to, $subject, $htmlBody, $replyTo) {
    $smtpServer = 'tls://' . SMTP_HOST;

    $smtp = @fsockopen($smtpServer, SMTP_PORT, $errno, $errstr, 10);
    if (!$smtp) {
        error_log("SMTP connect failed: $errstr ($errno)");
        return false;
    }

    $steps = [
        ['read',  '220'],
        ['write', 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n", '250'],
        ['write', "AUTH LOGIN\r\n",                    '334'],
        ['write', base64_encode(SMTP_USERNAME) . "\r\n", '334'],
        ['write', base64_encode(SMTP_PASSWORD) . "\r\n", '235'],
        ['write', 'MAIL FROM: <' . FROM_EMAIL . ">\r\n", '250'],
        ['write', "RCPT TO: <{$to}>\r\n",              '250'],
        ['write', "DATA\r\n",                           '354'],
    ];

    foreach ($steps as [$action, $cmd, $expect]) {
        if ($action === 'write') {
            fputs($smtp, $cmd);
        }
        $resp = smtpRead($smtp);
        if (substr($resp, 0, 3) !== $expect) {
            error_log("SMTP step failed (expected {$expect}): " . trim($resp));
            fclose($smtp);
            return false;
        }
    }

    // Send message
    $boundary = md5(uniqid());
    $headers  = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n"
              . "Reply-To: {$replyTo}\r\n"
              . "To: {$to}\r\n"
              . "Subject: {$subject}\r\n"
              . "MIME-Version: 1.0\r\n"
              . "Content-Type: text/html; charset=UTF-8\r\n";

    fputs($smtp, $headers . "\r\n" . $htmlBody . "\r\n.\r\n");
    $resp = smtpRead($smtp);

    fputs($smtp, "QUIT\r\n");
    fclose($smtp);

    return substr($resp, 0, 3) === '250';
}

function smtpRead($smtp) {
    $out = '';
    while ($line = fgets($smtp, 515)) {
        $out .= $line;
        if (preg_match('/^\d{3} /', $line)) break;
    }
    return $out;
}
