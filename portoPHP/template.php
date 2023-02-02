<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>actu</title>
    <link href="stylePORTFOLIO.css" rel="stylesheet" />
</head>
<body>
    <?php
    include './portoPHP/header.php';
    include './portoPHP/nav.php';
    if (!isset($pages)) {
        $pages = 'acceuil';
    }
    switch ($pages) {
        case 'acceuil':
            include './pagePHP/acceuil.php';
            break;
        case 'CV':
            include './pagePHP/CV.php';
            break;
        case 'realisation':
            include './pagePHP/realisation.php';
            break;
        case 'veilletec':
            include './pagePHP/veilletec.php';
            break;
        default:
            include './pagePHP/page_';
            break;
    }
    ?>
</body>
<script src="js/main.js"></script>
</html>