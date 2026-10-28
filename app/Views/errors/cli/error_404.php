<?php

use CodeIgniter\CLI\CLI;

/**
 * @var int|string $code
 * @var string     $message
 */
$code = $code ?? 404;
$message = $message ?? 'Page Not Found';

CLI::error('ERROR: ' . $code);
CLI::write($message);
CLI::newLine();
