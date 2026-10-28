<?php
$siswa = isset($siswa) ? $siswa : [];
$initialStudentsJson = isset($initialStudentsJson) ? $initialStudentsJson : '[]';
$appJsUrl = isset($appJsUrl) ? $appJsUrl : base_url('js/app.js');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Siswa XI RPL</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
                    },
                    colors: {
                        slate: {
                            950: '#060a12'
                        }
                    }
                }
            }
        };
    </script>
    <style>
        @media print {
            body {
                background: #ffffff !important;
                color: #000000 !important;
            }

            header,
            nav,
            section,
            footer,
            .no-print {
                display: none !important;
            }

            main {
                border: none !important;
                box-shadow: none !important;
                background: transparent !important;
            }

            table {
                width: 100% !important;
                color: #000 !important;
                border-collapse: collapse !important;
            }

            th,
            td {
                border: 1px solid #ddd !important;
                padding: 8px !important;
                color: #000 !important;
            }
        }

        .ease-bespoke {
            transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
    </style>
</head>

<body class="bg-[#000000] text-slate-100 min-h-screen antialiased selection:bg-sky-500/25 selection:text-sky-200">
    <div id="root"></div>

    <script id="server-students" type="application/json">
        <?= $initialStudentsJson ?>
    </script>
    <script src="<?= $appJsUrl ?>"></script>
</body>

</html>