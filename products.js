document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.product');

    // Fonction pour filtrer les items
    function filterItems(filterValue) {
        galleryItems.forEach(item => {
            if (filterValue === 'tous' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Ajouter l'événement click aux boutons de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');

            // Filtrer les items
            const filterValue = button.getAttribute('data-filter');
            filterItems(filterValue);
        });
    });

    // Appliquer le filtre "tous" au chargement de la page
    filterItems('tous');
});



//------------------------------------------------------------------------------

function showProduct(product) {
    let descriptionText;
    let priceText;

    switch (product) {
        case 'pack-invigosuncare':
            descriptionText = "Des formules revitalisantes enrichies en pro-vitamine B5 pour hydrater les cheveux après une exposition au soleil et en vitamine E pour les protéger des dommages solaires. Parfaites avant, pendant et après l'exposition. Protégez vos cheveux avec la gamme Sun Care, spécialement conçue pour les journées ensoleillées ! <br> Ce pack est composé d'un shampoing, d'un après-shampoing et d'un spray protection.";
            priceText = '100 €';
            break;
        case 'Shampoing-invigosuncare':
            descriptionText = "Un shampoing à la provitamine B5 pour nettoyer en douceur les cheveux après une exposition au sable et au sel de mer. Avec un parfum fruité et floral - c'est le parfum idéal pour l'été. Idéal avant, pendant et après l'exposition au soleil.<br><br><span class='bold-text'>Bénéfices:</span><br> - Nettoie en douceur après une exposition au soleil <br> - Nourrit et apporte de la brillance <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formule énergisante avec de la Pro Vitamine B5, aide à hydrater les cheveux après l'exposition au soleil <br>- Enrichi en vitamine E pour aider à protéger les cheveux des dommages causés par le soleil <br>- Doux pour les cheveux <br>- Pour tous les types de cheveux, avant, pendant et après l'exposition au soleil";
            priceText = '20 €';
            break;
        case 'Après-shampoing-invigosuncare':
            descriptionText = "Composé de provitamine B5 et d'huile d'abricot, cet après-shampoing aide instantanément à obtenir un effet réparateur en profondeur. Il laisse les cheveux irrésistiblement sains et doux au toucher. Avec un parfum fruité et floral - c'est le parfum idéal pour l'été. Idéal avant, pendant et après l'exposition au soleil. <br><br><span class='bold-text'>Bénéfices:</span><br> - La crème après soleil répare instantanément les dommages causés par l'exposition au soleil <br> - Nourrit et apporte de la brillance <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formule énergisante avec de la Pro-Vitamine B5 qui aide à hydrater les cheveux après l'exposition au soleil <br>- Enrichi en vitamine E pour aider à protéger les cheveux des dommages causés par le soleil <br>- Doux pour les cheveux <br>- Pour tous les types de cheveux, avant, pendant et après l'exposition au soleil";
            priceText = '30 €';
            break;
        case 'Spray protection-invigosuncare':
            descriptionText = "Spray protecteur sans rinçage pour la coloration des cheveux, offrant une protection optimale contre les UV. Enrichi en pro-vitamine B5 et vitamine E, il est idéal pour une utilisation avant, pendant et après l'exposition au soleil. Spécialement conçu pour préserver l'éclat de la coloration, il diffuse un parfum fruité et floral, parfait pour l'été.<br><br><span class='bold-text'>Bénéfices:</span><br>- Protège la couleur des cheveux contre les UV<br>- Hydrate pour une texture douce et une sensation de fraîcheur <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formule revitalisante avec Pro Vitamine B5, idéale pour hydrater les cheveux après l'exposition au soleil<br>- Enrichi en vitamine E pour protéger contre les dommages causés par le soleil<br>- Doux pour les cheveux<br>- Formule sans ingrédients d'origine animale<br>- Convient à tous les types de cheveux, utilisable avant, pendant et après l'exposition au soleil";
            priceText = '25 €';
            break;




        case 'Pack-ultimaterepair':
            descriptionText = "Découvrez Ultimate Repair, notre gamme la plus puissante pour réparer, renforcer et protéger vos cheveux abîmés. Enrichie en AHA et oméga-9, elle reconstruit la fibre capillaire et renforce sa barrière extérieure en 90 secondes. Ce pack complet inclut shampoing, après-shampoing, soin revitalisant et sérum protecteur pour une transformation instantanée.";
            priceText = '25 €';
            break;
        case 'Shampoing-ultimaterepair':
            descriptionText = "Un shampoing riche et onctueux qui crée une mousse légère pour un lavage doux et efficace au quotidien. Formulé avec notre technologie Metal Purifier, ce shampoing détoxifie et reconstruit les cheveux abîmés, à l'intérieur comme à l'extérieur, pour des cheveux sains, brillants et lisses. <br><br><span class='bold-text'>Bénéfices:</span><br> - Formulé avec notre technologie « Metal Purifier », pour purifier et détoxifier les cheveux abîmés par les métaux <br> - Prépare en douceur les cheveux à recevoir une routine et un traitement de soin réparateur <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Technologie brevetée à base d'AHA et d'Oméga-9 pour reconstruire et renforcer les cheveux de l'intérieur à l'extérieur <br>- Formule crémeuse et légère avec une texture mousseuse délicate et un parfum subtil <br>- Pour tous types et textures de cheveux : moyens, gras, fins, épais, lisses, ondulés, bouclés, frisés, crépus <br>- Vegan/Formulé sans ingrédients d'origine animale <br>- Convient aux cheveux colorés ";
            priceText = '31 €';
            break;
            
        case 'Après-shampoing-ultimaterepair':
            descriptionText = "Crémeux et riche, cet après-shampoing démêle, renforce en profondeur et répare les cheveux au quotidien, sans les alourdir. Convient à tous types de cheveux. <br><br><span class='bold-text'>Bénéfices:</span><br> - Nourrit en profondeur les cheveux abîmés. Un niveau de réparation adapté à la typologie de cheveu en fonction du temps de pause : 30 secondes pour les cheveux très fins / légèrement abîmés à 3 minutes pour les cheveux épais / très abîmés. <br> - Hydrate après une seule utilisation qui dure jusqu'à 4 lavages <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Technologie brevetée à base d'AHA et d'Oméga-9 pour reconstruire et renforcer les cheveux de l'intérieur à l'extérieur <br>- Formule crémeuse et légère avec une texture mousseuse délicate et un parfum subtil <br>- Pour tous types et textures de cheveux : moyens, gras, fins, épais, lisses, ondulés, bouclés, frisés, crépus <br>- Vegan/Formulé sans ingrédients d'origine animale <br>- Convient aux cheveux colorés ";
            priceText = '34,90 €';
            break;

        case 'Serum protecteur-ultimaterepair':
            descriptionText = "Ce sérum délicat protège, répare, lisse tous les types de cheveux et convient parfaitement aux boucles. Conçu pour une application quotidienne, il réduit instantanément les frisottis et facilite le coiffage. Il offre une protection 5-en-1 contre la casse, les UV, la chaleur (jusqu’à 230°C), les dommages extérieurs et les frisottis. <br><br><span class='bold-text'>Bénéfices:</span><br> - Protection contre la casse, les UV, la chaleur (jusqu’à 230°C), les dommages extérieurs et les frisottis <br> - 99% de casse en moins <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Technologie brevetée à base d'AHA et d'Oméga-9 pour reconstruire et renforcer les cheveux de l'intérieur à l'extérieur <br>- Formule crémeuse et légère avec une texture mousseuse délicate et un parfum subtil <br>- Pour tous types et textures de cheveux : moyens, gras, fins, épais, lisses, ondulés, bouclés, frisés, crépus <br>- Vegan/Formulé sans ingrédients d'origine animale <br>- Convient aux cheveux colorés ";
            priceText = '20 €';
            break;

        case 'Traitement reparateur-ultimaterepair':
            descriptionText = "Un traitement capillaire qui répare les cheveux abîmés en 90 secondes. Ce spray sans rinçage, enrichi en acides alpha-hydroxylés (AHA) et en Oméga-9, démêle les cheveux et renforce, lisse et reconstruit les cheveux à l’intérieur et à l’extérieur. Résultats spectaculaires après une seule utilisation. <br><br><span class='bold-text'>Bénéfices:</span><br> - Répare les cheveux abîmés en 90 secondes <br> - Des cheveux 12x plus lisses <br> - 99% de casse en moins <br> - Une brillance ultime qui dure jusqu’à quatre lavages <br> - Fort pouvoir démêlant <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Technologie brevetée à base d'AHA et d'Oméga-9 pour reconstruire et renforcer les cheveux de l'intérieur à l'extérieur <br>- Vegan/Formulé sans ingrédients d'origine animale <br>- Convient aux cheveux colorés ";
            priceText = '20 €';
            break;

        case 'Pack-sanssulfates':
            descriptionText = "Découvrez la routine weDo/ Sans Sulfates chez Florida Coiffure, conçue pour prendre soin de vos cheveux tout en respectant la nature. Sans sulfates, silicones, ni colorants artificiels, ces produits sont formulés avec des ingrédients d'origine naturelle qui lavent et hydratent en douceur. Ce pack comprend un shampoing, un conditionneur et une huile naturelle pour des cheveux sains, nourris et éclatants, tout en simplicité.";
            priceText = '20 €';
            break;

        case 'Shampoing-sanssulfates':
            descriptionText = "Ce shampooing pour cheveux normaux et abîmés possède une formule minimaliste peu moussante qui nettoie en douceur le cuir chevelu et les cheveux, les laissant doux, éclatants et nourris. <br><br><span class='bold-text'>Points forts:</span><br> - Résultats professionnels, convient aux cheveux colorés <br>- Formulée sans sulfates, sans silicones ni colorants artificiels <br>- 94 % d’ingrédients d'origine naturelle <br>- Bouteille en plastique composée de 75 % de matériaux recyclés et 100 % recyclable <br>- Certifié par Vegan Society et approuvé par Cruelty Free International";
            priceText = '20 €';
            break;

        case 'Après-shampoing-sanssulfates':
            descriptionText = "L’après-shampooing Hydratation & Brillance démêle instantanément les cheveux abîmés et les laisse doux et brillants. Et tout cela, sans silicones ! Grâce à l’extrait de rooibos naturellement fermenté, c’est un excellent conditionneur réparateur pour garder une couleur vibrante. <br><br><span class='bold-text'>Points forts:</span><br> - Résultats professionnels, convient aux cheveux colorés <br>- Formulée sans sulfates, sans silicones ni colorants artificiels <br>- Certifié par Vegan Society et approuvé par Cruelty Free International <br>- 94 % d’ingrédients d'origine naturelle <br>- Tube en plastique composé de 50 % de matériaux recyclés et 100 % recyclables";
            priceText = '20 €';
            break;

        case 'Huile -sanssulfates':
            descriptionText = "Cette composition d'huiles naturelles pour cheveux les nourrit instantanément, les laissant doux et brillants, avec un effet anti-frisottis. Vous pouvez également l'appliquer sur votre corps pour chouchouter votre peau. <br><br><span class='bold-text'>Points forts:</span><br> - 99,4 % d’ingrédients d'origine naturelle <br>- Formulée sans sulfates, sans silicones ni colorants artificiels <br>- Certifié par Vegan Society et approuvé par Cruelty Free International <br>- Avec de l’huile de macadamia et de l’huile d’avocat <br>- Bouteille en verre 100 % recyclable";
            priceText = '20 €';
            break;


        case 'Pack -cheveuxgras':
            descriptionText = "La Routine Cheveux Gras est idéale pour combattre les cheveux à tendance grasse et les pellicules grasses. Elle nettoie, régule et apaise pour un cuir chevelu équilibré. Le pack est composé d'un shampoing, d'une lotion, d'un shampeeling et d'un masque.";
            priceText = '20 €';
            break;

        case 'Shampoing -cheveuxgras':
            descriptionText = "Le Purify Shampoo de la gamme System Professional est spécialement formulé pour les cheveux gras. Ce shampoing nettoie en douceur tout en réduisant efficacement l'excès de sébum, laissant le cuir chevelu frais et purifié. Grâce à sa formule légère, il permet de prolonger la sensation de propreté des cheveux, leur offrant un aspect léger et soyeux. Utilisé régulièrement, il aide à rééquilibrer la production de sébum, pour des cheveux qui restent propres plus longtemps.";
            priceText = '20 €';
            break;

        case 'Lotion -cheveuxgras':
            descriptionText = "La Purify Lotion est un soin ciblé qui prévient la formation des pellicules et agit en profondeur pour purifier le cuir chevelu. Enrichie en ingrédients actifs, elle aide à rééquilibrer le cuir chevelu en réduisant les irritations et en combattant les causes des pellicules. Appliquée directement sur le cuir chevelu, elle pénètre rapidement et laisse une sensation de fraîcheur apaisante, tout en renforçant la santé des cheveux dès la racine.";
            priceText = '20 €';
            break;

        case 'Shampeeling -cheveuxgras':
            descriptionText = "Le Purify Shampeeling est un traitement intensif conçu pour éliminer les pellicules tenaces et restaurer l'équilibre naturel du cuir chevelu. Sa formule exfoliante douce élimine les cellules mortes, débloque les pores et favorise un cuir chevelu plus sain. En rééquilibrant la production de sébum, il contribue à prévenir la réapparition des pellicules, tout en laissant les cheveux propres et revitalisés après chaque utilisation.";
            priceText = '20 €';
            break;

        case 'Masque -cheveuxgras':
            descriptionText = "Le Purify Mask est un masque nourrissant qui agit en profondeur pour hydrater et protéger les cheveux tout en ayant une action antipelliculaire. Conçu pour apaiser les irritations du cuir chevelu, il aide également à renforcer les cheveux contre les agressions extérieures. Après chaque application, vos cheveux sont non seulement nourris et protégés, mais ils retrouvent également un toucher doux et soyeux, sans alourdissement.";
            priceText = '20 €';
            break;
    
        case 'Pack-colormotion':
            descriptionText = "Découvrez le pack ColorMotion+, conçu pour préserver l'éclat de votre couleur tout en renforçant vos cheveux. Avec son soin de coloration au triple bénéfice, ce pack offre jusqu'à 8 semaines de protection de la couleur, tout en apportant force et brillance. Inclus dans ce pack : un shampoing, un après-shampoing et un masque, tous formulés pour maintenir la vitalité de votre couleur et la santé de vos cheveux.";
            priceText = '20 €';
            break;

        case 'Shampoing-colormotion':
            descriptionText = "Un shampoing dédié à la coloration pour cheveux colorés qui va au-delà de la simple prévention des effets de décoloration, offrant jusqu'à 8 semaines de protection de la couleur. Aide à fixer la coloration tout en préservant la douceur et la brillance des cheveux. Notre shampooing protecteur de couleur aide à fixer la couleur tout en préservant la douceur et la brillance des cheveux. Formulé avec un anti-oxydant pour optimiser la protection contre les radicaux libres.<br><br><span class='bold-text'>Bénéfices:</span><br> - Aide à fixer la coloration tout en préservant la douceur et la brillance des cheveux <br>- Protection de la coloration, brillance éclatante et cheveux plus forts <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec du Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau <br>- Soin pour les cheveux colorés et abîmés";
            priceText = '20 €';
            break;

        case 'Après-shampoing-colormotion':
            descriptionText = "Cet après-Shampoing dédié aux cheveux colorés, conçu pour un usage fréquent, aide à restaurer la qualité de la surface des cheveux pour une brillance éclatante. Pour un usage fréquent. ​Répare la fibre capillaire pour une brillance éclatante.<br><br><span class='bold-text'>Bénéfices:</span><br> - Aide à restaurer la barrière extérieure des cheveux pour une brillance éclatante <br>- Protection de la couleur, brillance éclatante et cheveux plus forts <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec du Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau <br>- Soin pour les cheveux colorés et abîmés <br>- ColorMotion+ intègre également l’agent restructurant WELLAPLEX+ qui renforce les cheveux en reconstruisant les liaisons capillaires après la coloration";
            priceText = '20 €';
            break;

        case 'Masque-colormotion':
            descriptionText = "Aide à reconstruire les ponts de la fibre capillaires. Apporte douceur et brillance. Provides strengthened hair structure, shine and lasting manageability. Avec la technologie Metal Purifier. Formule intensive, à utiliser toutes les 1 à 2 semaines. <br><br><span class='bold-text'>Bénéfices:</span><br> - Aide à reconstruire les ponts de la fibre capillaire <br>- Apporte douceur et brillance <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec du Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau <br>- Soin pour les cheveux colorés et abîmés <br>- ColorMotion+ intègre également l’agent restructurant WELLAPLEX+ qui renforce les cheveux en reconstruisant les liaisons capillaires après la coloration";
            priceText = '20 €';
            break;

        case 'Pack-color':
            descriptionText = "Découvrez le pack Color Brilliance, conçu pour préserver l'éclat des cheveux colorés et les protéger des agressions quotidiennes. Enrichi en citron caviar, vitamine E et avec la technologie Metal Purifier, ce pack offre une protection complète contre les métaux nocifs présents dans l'eau, assurant une couleur vibrante et durable. Le shampoing, l'après-shampoing, le masque et le spray inclus dans ce pack travaillent en synergie pour contrôler l'oxydation, renforcer les cheveux et maintenir leur brillance.";
            priceText = '20 €';
            break;

        case 'Shampoing-color':
            descriptionText = "Sa formule au pH faible optimisé aide à fermer la cuticule après la coloration, pour permettre une meilleure conservation de la couleur. Procure aux cheveux un toucher exceptionnel et un éclat lumineux. Ce Shampoing assure une protection longue tenue de la couleur, un aspect brillant et une brillance éclatante des cheveux. <br><br><span class='bold-text'>Bénéfices:</span><br> -  Éclat de la couleur et brillance instantanées <br>- Protection longue tenue de la coloration après une utilisation régulière <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - L’histidine et la vitamine E (technologie Bouclier Antioxydant) contrôlent le processus d’oxydation après la coloration et protègent la couleur. <br>- Doux pour les cheveux et la peau";
            priceText = '20 €';
            break;
        
    

        case 'Après-shampoing-color':
            descriptionText = "<span class='bold-text'>Bénéfices:</span><br> - Démêle instantanément et lisse la cuticule <br>- Améliore l'éclat de la couleur <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec du Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau <br>- Soin pour les cheveux colorés et abîmés <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
    

        case 'Spray-color':
            descriptionText = "Spray magnifiant qui apporte de l’éclat à la couleur, démêle et lisse la surface des cheveux. Avec technologie bouclier antioxydant. <br><br><span class='bold-text'>Bénéfices:</span><br> - Améliore l'éclat de la couleur <br>- Laisse les cheveux démêlés et lisses <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec technologie bouclier antioxydant pour aider à contrôler le processus d'oxydation après la coloration et pour protéger la coloration <br>- Doux pour les cheveux <br>- Spray pour cheveux colorés";
            priceText = '20 €';
            break;

        case 'Masque-color':
            descriptionText = "Soin intensif pour améliorer la surface des cheveux et rehausser l’éclat de la couleur. Avec technologie bouclier antioxydant. <br><br><span class='bold-text'>Bénéfices:</span><br> -  Lisse les cuticules <br>- Améliore l'éclat de la couleur <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - L’histidine et la vitamine E (technologie Bouclier Antioxydant) contrôlent le processus d’oxydation après la coloration et protègent la couleur. <br>- Formulé avec du Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau";
            priceText = '20 €';
            break;
    

            
        case 'Pack-curly':
            descriptionText = "Découvrez le pack Cheveux Bouclés, spécialement conçu pour apporter à vos boucles et ondulations la nutrition nécessaire pour une définition et une souplesse optimales. Composé d'un shampoing, d'un après-shampoing, d'un masque et d'un baume, ce pack utilise le complexe Nourish-in, avec de l'extrait de son de blé et de l'huile de jojoba, pour offrir un niveau de nutrition adapté à chaque type de boucle, du léger à l'intense. Vos cheveux sont nourris, faciles à coiffer, et les frisottis sont réduits pour une définition des boucles qui dure 24 heures. Gardez des boucles parfaitement dessinées et souples grâce à ce soin complet.";
            priceText = '20 €';
            break;
        case 'Shampoing-curly':
            descriptionText = "Shampoing nourrissant au complexe Nourish-In pour les boucles et les ondulations, qui apporte définition et anti-frisottis. La technologie micellaire élimine en douceur les impuretés sans dessécher le cuir chevelu et les cheveux.<br><br><span class='bold-text'>Bénéfices:</span><br> - Définition des boucles et anti-frisottis <br>- Nettoie en douceur sans dessécher les cheveux et le cuir chevelu <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec la technologie micellaire, il élimine en douceur les impuretés sans dessécher le cuir chevelu et les cheveux <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
        case 'Après-shampoing-curly':
            descriptionText = "Nourrit et définit instantanément les cheveux ondulés et bouclés en toute légèreté. Formule démêlante et douce.<br><br><span class='bold-text'>Bénéfices:</span><br> - Démêle pour une sensation de douceur sur les cheveux <br>- Définie et nourrit les cheveux instantanément <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec la technologie micellaire, il élimine en douceur les impuretés sans dessécher le cuir chevelu et les cheveux <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
        case 'Baume-curly':
            descriptionText = "Baume nourrissant sans rinçage pour une tenue souple, une définition et du ressort. La base parfaite pour révéler de superbes boucles.<br><br><span class='bold-text'>Bénéfices:</span><br> - Nourrit intensément <br>- Pour des boucles définies et rebondies <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec le complexe Nourish-In pour nourrir intensément vos cheveux et vous offrir une chevelure souple. Avec de l'huile de jojoba et du panthénol pour des boucles nourries et définies. <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
        case 'Masque-curly':
            descriptionText = "Soin nourrissant intense pour un traitement en profondeur qui protège des frisottis et permet d’obtenir de somptueuses boucles ou ondulations tout en souplesse. Contient un niveau élevé d'ingrédients nourrissants et assouplissants.<br><br><span class='bold-text'>Bénéfices:</span><br> - Nourrit intensément <br>- Aide à prévenir les frisottis pour une définition agréable au toucher <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec le complexe Nourish-In, comprenant de l'huile de jojoba et du panthénol pour nourrir légèrement et définir vos ondulations <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
        

  
        case 'Pack-brillance':
            descriptionText = "Découvrez le pack Cheveux Brillants, conçu pour apporter luminosité et douceur instantanées à vos cheveux. Grâce au Programme d'Oléologie, ce trio composé d'un shampoing, d'un après-shampoing et d'une huile précieuse protège et prévient la dégénérescence naturelle des lipides, assurant une surface capillaire lisse et éclatante. Enrichi en panthénol pour rétablir l'hydratation, en Metal Purifier pour protéger contre les métaux nocifs présents dans l'eau, et en huiles botaniques premium aux propriétés lissantes, ce pack est parfait pour sublimer les cheveux, y compris colorés.";
            priceText = '20 €';
            break;
        case 'Shampoing-brillance':
            descriptionText = "Un shampooing hydratant léger qui nettoie les cheveux en profondeur pour les rendre lumineux.<br><br><span class='bold-text'>Bénéfices:</span><br> - Des cheveux jusqu'à 3 fois plus lisses <br>- Pour des cheveux lumineux et nettoyés en profondeur <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Enrichi de Metal Purifier pour protéger les cheveux des métaux nocifs présents dans l'eau <br>- Doux pour les cheveux et la peau";
            priceText = '20 €';
            break;
        case 'Après-shampoing-brillance':
            descriptionText = "Un conditionneur lissant qui agit en 30 secondes pour conserver l’hydratation et rendre les cheveux lumineux et lisses.<br><br><span class='bold-text'>Bénéfices:</span><br> - Conserve l'hydratation, laissant les cheveux lumineux et lisses <br>- Hydrate et dompte vos cheveux en un instant <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Formulé avec de l'extrait de thé blanc et des huiles botaniques précieuses, connues pour leurs propriétés lissantes <br>- Doux pour les cheveux";
            priceText = '20 €';
            break;
        case 'Huile-brillance':
            descriptionText = "Huile de soin perfectrice pour lisser les cheveux et leur donner uneffet brillant, avec de l’huile de noix de macadamia et d’avocat. <br><br><span class='bold-text'>Bénéfices:</span><br> - Aide à fixer la coloration tout en préservant la douceur et la brillance des cheveux <br>- Crée un effet brillant <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Enrichie en huiles de graines de macadamia et d'avocat <br>- Doux pour les cheveux <br>- Formulé avec le programme d'oléologie, il aide à protéger et à prévenir la dégénérescence naturelle des lipides pour une surface lisse et lumineuse.";
            priceText = '20 €';
            break;

            
            
  
        case 'Pack-luxeoil':
            descriptionText = "Découvrez le pack LuxeOil de System Professional, un soin complet pour nourrir et protéger en profondeur vos cheveux. Composé d'un shampoing, d'un conditionneur, d'un masque et de l'essence Keratin Boost, ce pack utilise le complexe FibraNourish et un trio d'huiles précieuses. L'huile d'argan apporte une brillance éclatante, l'huile de jojoba renforce et protège, tandis que l'huile d'amande hydrate sans alourdir. Idéal pour revitaliser la fibre capillaire et préserver la kératine naturelle, LuxeOil laisse vos cheveux doux, lisses et resplendissants de santé.";
            priceText = '20 €';
            break;
        case 'Shampoing-luxeoil':
            descriptionText = "Un soin nettoyant fondamental qui nourrit sans alourdir les cheveux.<br><br><span class='bold-text'>Bénéfices:</span><br> - Shampooing luxueux et léger <br>- Des cheveux au toucher soyeux, faciles à coiffer <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Convient à tout type de cheveux";
            priceText = '20 €';
            break;
        case 'Après-shampoing-luxeoil':
            descriptionText = "<span class='bold-text'>Bénéfices:</span><br> - Agit en 30 secondes seulement <br>- Protège la kératine et la fibre capillaire des dommages causés par les outils chauffants <br>- Cheveux extrêmement doux et coiffage facile <br>- Nourrit et hydrate <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Convient à tout type de cheveux <br>- Enrichi en huile d’argan, de jojoba et d’amande douce";
            priceText = '20 €';
            break;
        case 'Masque-luxeoil':
            descriptionText = "<span class='bold-text'>Bénéfices:</span><br> - Protège la kératine et la fibre capillaire des dommages causés par les outils chauffants <br>- Nourrit et lisse les cheveux pour faciliter le coiffage et le démêlage <br>- Reconstruit les cheveux pour une texture améliorée et un toucher somptueux <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Convient à tout type de cheveux";
            priceText = '20 €';
            break;
        case 'Keratin-luxeoil':
            descriptionText = "Soin anti-casse sans rinçage qui pénètre la fibre capillaire pour reconstruire la kératine et renforcer la résistance. <span class='bold-text'>Bénéfices:</span><br> - Facilite le coiffage et améliore la douceur <br>- Prévient le photovieillissement <br>- Répare et adoucit la texture des cheveux <br><br><span class='bold-text'>Points forts de la formulation:</span><br> - Convient à tout type de cheveux <br>- Convient aux cheveux fragiles et abîmés avec des pointes sèches";
            priceText = '20 €';
            break;

        case 'Pack-hommes':
            descriptionText = "Découvrez la routine SEB MAN pour hommes, un pack complet pour le soin des cheveux et de la barbe. Composée d’un shampoing, d’un conditionneur, d’une argile coiffante, d’un gel, d’un kit barbier et d’un gel nettoyant, cette routine est conçue pour répondre à tous vos besoins de grooming. Simplifiez votre quotidien tout en restant impeccable avec SEB MAN.";
            priceText = '20 €';
            break;
        case 'Shampoing-hommes':
            descriptionText = "Le Shampooing Épaississant The Boss de Seb Man Sebastian Professional est conçu pour densifier et épaissir les cheveux, offrant une texture plus pleine et un aspect plus épais. Enrichi en extrait de guarana, bergamote et poivre rose, il rafraîchit les cheveux tout en leur apportant une sensation de fraîcheur. Idéal pour tous les types de cheveux, notamment les cheveux fins, ce shampoing fortifiant améliore l'adhérence et la texture des cheveux. Pour des résultats optimaux, utilisez-le en complément du tonique The Booste, et profitez d'une chevelure plus dense, texturisée et revitalisée.";
            priceText = '20 €';
            break;                    
        case 'Après-shampoing-hommes':
            descriptionText = "Le Conditionneur The Smoother Seb Man Sebastian Professional 250 ml, conçu pour les hommes, hydrate le cuir chevelu et la fibre capillaire. Enrichi en extrait de guarana, il revitalise les cheveux, tandis que son parfum stimulant de poivre rose et bergamote apporte une fraîcheur intense qui dure des heures. Adapté à tous les types de cheveux, il facilite le démêlage, réduit les frisottis, et laisse les cheveux doux, souples et brillants. Idéal pour les cheveux fragilisés, il leur apporte force et vitalité, tout en ravivant leur éclat.";
            priceText = '20 €';
            break;   
        case 'Argile-hommes':
            descriptionText = "L'Argile The Sculptor Seb Man Sebastian Professional 75 ml est une argile minérale destinée aux hommes, idéale pour coiffer et styliser les cheveux avec un fini mat. Elle permet de créer des styles bruts et coiffés/décoiffés sans effet gras ni alourdissement. Formulée avec de l'extrait de guarana pour une source naturelle d'énergie, elle laisse un parfum subtil de bergamote et de poivre rose. Pour une tenue longue durée, mélangez-la avec le gel remodelable The Hiro. Cette argile offre une fixation durable et une texture personnalisée pour tous les types de coiffures.";
            priceText = '20 €';
            break;
        case 'Gel-hommes':
            descriptionText = "Le Gel Remodelable The Hero Seb Man Sebastian Professional 75 ml offre une fixation forte pendant 24 heures tout en permettant de remodeler la coiffure à volonté. Spécialement conçu pour les hommes, ce gel laisse un fini vinyle brillant sans résidus, ni effet gras, collant ou figé. Il s'applique sur cheveux secs ou humides et se rince facilement. Enrichi en extrait de guarana pour une dose d'énergie, il diffuse un parfum rafraîchissant de poivre rose et de bergamote qui dure des heures. Idéal pour changer de style à tout moment de la journée.";
            priceText = '20 €';
            break;
                            
                            
                            
        

        default:
            descriptionText = 'error 404';
            priceText = 'Prix du produit €';
    }

    document.getElementById('price').innerText = `Acheter - ${priceText}`;
    document.querySelector('.description p').innerHTML = descriptionText;


    // Ajouter la classe selected au bouton cliqué
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    const selectedButton = document.querySelector(`.buttons button[onclick="showProduct('${product}')"]`);
    selectedButton.classList.add('selected');
}

// Fonction pour initialiser le bouton par défaut
document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('.buttons button');
    const firstProduct = firstButton.getAttribute('onclick').match(/'(.*)'/)[1];
    showProduct(firstProduct);
});


