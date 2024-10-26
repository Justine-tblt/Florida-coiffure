
// // Création d'un slider
// var position=1

// function decaleGauche() {
//     position+=1
//     if (position==6) {
//         retourDebut ()
//     }
//     else{
//         document.querySelector('.js-photos').style.left=position * -600 + "px"
//     }
// }

// function decaleDroite() {
//     position -=1
//     if (position <1) {
//         retourFin ()
//     }
//     else {
//         document.querySelector('.js-photos').style.left = position * -600 + "px"
//     }
//     return
// }

// function retourDebut() {
//     document.querySelector('.js-photos').style.transition="0s"
//     position=0
//     document.querySelector('.js-photos').style.left=position * -600 + "px"
//     setTimeout(function(){
//         document.querySelector('.js-photos').style.transition="0.3s"
//         decaleGauche()
//     }, 20)
// }

// function retourFin () {
//     document.querySelector('.js-photos').style.transition ="0s"
//     position = 6
//     document.querySelector('.js-photos').style.left = position *-600 + "px"
//     setTimeout(function() {
//         document.querySelector('.js-photos').style.transition ="0.3s"
//         decaleDroite()

//     }, 20)
// }

// let ButtonDroite = document.querySelector('.js-btn-decale-gauche')
// ButtonDroite.addEventListener('click', decaleGauche)

// let ButtonGauche = document.querySelector('.js-btn-decale-droite')
// ButtonGauche.addEventListener('click', decaleDroite)


// Création d'un slider
var position = 1;
var totalSlides = 3; // Le nombre total de slides

function decaleGauche() {
    position += 1;
    if (position == totalSlides) {
        retourDebut();
    } else {
        document.querySelector('.js-photos').style.left = position * -1100 + "px";
    }
}

function decaleDroite() {
    position -= 1;
    if (position < 1) {
        retourFin();
    } else {
        document.querySelector('.js-photos').style.left = position * -1100 + "px";
    }
    return;
}

function retourDebut() {
    document.querySelector('.js-photos').style.transition = "0s";
    position = 0;
    document.querySelector('.js-photos').style.left = position * -1100 + "px";
    setTimeout(function() {
        document.querySelector('.js-photos').style.transition = "0.3s";
        decaleGauche();
    }, 20);
}

function retourFin() {
    document.querySelector('.js-photos').style.transition = "0s";
    position = totalSlides;
    document.querySelector('.js-photos').style.left = position * -1100 + "px";
    setTimeout(function() {
        document.querySelector('.js-photos').style.transition = "0.3s";
        decaleDroite();
    }, 20);
}

let ButtonDroite = document.querySelector('.js-btn-decale-gauche');
ButtonDroite.addEventListener('click', decaleGauche);

let ButtonGauche = document.querySelector('.js-btn-decale-droite');
ButtonGauche.addEventListener('click', decaleDroite);

// Change the slide automatically every 5 seconds
setInterval(decaleGauche, 5000);



document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    const currentDayElement = document.getElementById(daysOfWeek[today]);

    if (currentDayElement) {
        currentDayElement.classList.add('current');
    }
});


//PARTAGER L'URL DE LA PAGE
function copierURL() {
	var txt_tempo = document.createElement("input");
	txt_tempo.value = window.location.href;
	document.body.appendChild(txt_tempo);
	txt_tempo.select();
	document.execCommand("copy");
	document.body.removeChild(txt_tempo);
	alert("URL copiée dans le presse-papiers !");
}

