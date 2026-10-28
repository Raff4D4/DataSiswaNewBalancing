<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Pager extends BaseConfig
{
    public array $templates = [
        'default_full'   => 'App\Views\Pagers\bootstrap_pagination',
        'default_simple' => 'CodeIgniter\Pager\Views\default_simple',
        'default_head'   => 'CodeIgniter\Pager\Views\default_head',
        'bootstrap'      => 'App\Views\Pagers\bootstrap_pagination',
    ];

    public int $perPage = 20;
}
