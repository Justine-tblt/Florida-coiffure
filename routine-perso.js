document.addEventListener("DOMContentLoaded", () => {
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nextButtons = document.querySelectorAll(".next-step");
    const prevButtons = document.querySelectorAll(".prev-step");
    const currentStepElement = document.getElementById("current-step");
    const form = document.getElementById("hair-care-form");
    const result = document.getElementById("result");
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle("active", index === step);
        });
        currentStepElement.textContent = step + 1;
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index >= 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        generateRoutine();
    });
});

function generateRoutine() {
    const environment = Array.from(document.querySelectorAll('input[name="environment"]:checked')).map(el => el.value);
    const scalp = Array.from(document.querySelectorAll('input[name="scalp"]:checked')).map(el => el.value);
    const lengths = Array.from(document.querySelectorAll('input[name="lengths"]:checked')).map(el => el.value);

    let routine = '';

    // Example logic for combinations
    if (environment.includes('urbain') && scalp.includes('gras') && lengths.includes('hydrater')) {
        routine += '<p>Pour un environnement urbain avec des cheveux gras et besoin d\'hydrater les longueurs :</p>';
        routine += '<ul>';
        routine += '<li>Utilisez un shampoing purifiant pour cheveux gras.</li>';
        routine += '<li>Appliquez un masque hydratant sur les longueurs.</li>';
        routine += '<li>Utilisez un spray protecteur contre la pollution.</li>';
        routine += '</ul>';
    } else if (environment.includes('calcaire') && scalp.includes('apaiser') && lengths.includes('réparer')) {
        routine += '<p>Pour un environnement calcaire avec des besoins d\'apaisement du cuir chevelu et de réparation des longueurs :</p>';
        routine += '<ul>';
        routine += '<li>Utilisez un shampoing apaisant et anti-calcaire.</li>';
        routine += '<li>Appliquez un soin réparateur sur les longueurs.</li>';
        routine += '<li>Utilisez un après-shampoing hydratant pour neutraliser les effets du calcaire.</li>';
        routine += '</ul>';
    } else {
        routine += '<p>Nous n\'avons pas de routine spécifique pour cette combinaison. Veuillez essayer avec d\'autres options.</p>';
    }

    // Hide the form and show the result
    document.getElementById("hair-care-form").classList.add("hidden");
    document.getElementById("step-indicator").classList.add("hidden");
    result.innerHTML = routine;
    result.classList.remove("hidden");

}


