<?php

use CodeIgniter\Router\RouteCollection;

$routes->get('/', 'Home::index');
$routes->post('home/tambah', 'Home::tambah');
$routes->post('api/students', 'Home::tambah');
$routes->get('home/hapus/(:num)', 'Home::hapus/$1');
$routes->post('api/students/delete/(:num)', 'Home::hapus/$1');
$routes->post('home/edit/(:num)', 'Home::edit/$1');
$routes->post('api/students/edit/(:num)', 'Home::edit/$1');
$routes->post('api/grades/update', 'Home::updateGrade');
$routes->post('api/students/bulk-transfer', 'Home::bulkTransfer');
