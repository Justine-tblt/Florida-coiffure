<?php
include("connexion.php");
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$requete = "SELECT * FROM coiffure_presta WHERE id = ?";
$stmt = $db->prepare($requete);
$stmt->execute([$id]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $nom = htmlspecialchars($result["nom"]);
    $prix = htmlspecialchars($result["prix"]);
    $description = htmlspecialchars($result["description"]);
    $img1 = htmlspecialchars($result["img1"]);
    $img2 = htmlspecialchars($result["img2"]);
    $img3 = htmlspecialchars($result["img3"]);
    $img4 = htmlspecialchars($result["img4"]);
    // Regrouper les prestations dans un tableau
    $prestations = [];
    for ($i = 1; $i <= 5; $i++) {
        $presta = htmlspecialchars($result["presta" . $i]);
        if (!empty($presta)) {
            $prestations[] = $presta;
        }
    }


} else {
    $nom = "Prestation non trouvée";
    $prix = "";
    $description = "";
    $img1 = "";
    $img2 = "";
    $img3 = "";
    $img4 = "";
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="detail.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" type="image/png" href="./images/icon.png">
    
    <!--FONT AWESOME-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!--POLICE D'ÉCRITURE-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <title><?= $nom ?> - Florida Coiffure</title>
</head>
<body>
    
    <header>
        <div class="logo1"><img src="images/logo.png" alt=""></div>
        <div class="navbar">
            <div class="menu-toggle" id="menuToggle">
                &#9776; <!-- Unicode pour le symbole hamburger -->
            </div>
            <ul class="nav-list" id="navList">
                <li class="item"><a href="index.html">Accueil</a></li>
                <li class="item"><a href="prestations-home.php">Coiffure</a></li>
                <li class="item"><a href="ongles.html">Onglerie</a></li>
                <li class="item"><a href="products.html">Boutique</a></li>
            </ul>
        </div>
    </header>

    <div class="top"> 
        <div class="back">
            <a href="prestations-home.php" class="retour"><i class="fa-solid fa-chevron-left"></i> Page précédente</a>
        </div>
    </div>

    <div class="container">
        <div class="images">
            <?php if ($img1): ?><div class="image-container"><img src="<?= $img1 ?>" alt="Image 1"></div><?php endif; ?>
            <?php if ($img2): ?><div class="image-container"><img src="<?= $img2 ?>" alt="Image 2"></div><?php endif; ?>
            <?php if ($img3): ?><div class="image-container"><img src="<?= $img3 ?>" alt="Image 3"></div><?php endif; ?>
            <?php if ($img4): ?><div class="image-container"><img src="<?= $img4 ?>" alt="Image 4"></div><?php endif; ?>
        </div>
    </div>

    <section class="block" id="content">
        <div>
            <h1><?= $nom ?></h1>
            <?php if ($prix): ?><h2 class="prix">À partir de <?= $prix ?>€</h2><?php endif; ?>
            <?php if ($description): ?>
                <h2 class="description">Présentation:</h2>
                <p><?= $description ?></p>
            
            
                <?php if (!empty($prestations)): ?>
                    <h2 class="description">Prestations proposées:</h2>
                    <ul class="list">
                        <?php foreach ($prestations as $presta): ?>
                            <li><?= $presta ?></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>


            <?php endif; ?>
            
            <div class="btn">
                <div class="button"><a href="form-resa.php">Réserver</a></div>
                <button onclick="copierURL()" class="share"><i class="fa-solid fa-share-nodes"></i><span class="sr-only">Partager la page</span></button>
            </div>
        </div>
    </section>

    <!-- FOOTER--->
    <footer id="footer">
        <div class="container-footer">
            <div class="column">
                <h4>Nous contacter</h4>
                <ul class="footer-info">
                    <li class="info"><a href="https://maps.app.goo.gl/gYwtXxxcoUaWmJxg8">29 Rue Vincent, 30240 Le Grau-du-Roi <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li class="info"><a href="tel:0466510012">04.66.51.00.12 <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                </ul>
            </div>
            <div class="column">
                <h4>Liens utiles</h4>
                <ul class="footer-info">
                    <li class="info"><a href="https://www.planity.com/florida-coiffure-30240-le-grau-du-roi">Prendre rendez-vous <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li class="info"><a href="mentionslegales.php">Mentions légales  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                </ul>
            </div>
        </div>
        <br>
        <p class="txtdroits">&copy; 2024 Florida Coiffure. Tous droits réservés.</p>
    </footer>

    <script src="script.js"></script>
    <script src="menu.js"></script>

</body>
</html>
