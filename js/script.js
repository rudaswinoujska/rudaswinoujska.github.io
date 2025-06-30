// Przełączanie widoczności menu na urządzeniach mobilnych
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
});
// Animacja przełączania motywu
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('darkSwitch');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // Słońce rusza i zanika jednocześnie

            sun.classList.add('switch-move');
            sun.classList.remove('switch-show');
            sun.classList.add('switch-hide');

            // Po przerwie księżyc pojawia się i rusza do połowy
            setTimeout(() => {
                // Usuń switch-move ze słońca przed animacją
                moon.classList.add('switch-move');
                moon.classList.remove('switch-hide');
                moon.classList.add('switch-show');
                
                // Usuń switch-move z księżyca po jego zniknięciu
            }, 200);

        } else {
            // Księżyc wraca do połowy i znika jednocześnie
            moon.classList.remove('switch-move')
            moon.classList.remove('switch-show');
            moon.classList.add('switch-hide');

            // Po przerwie słońce pojawia się i wraca na początek
            setTimeout(() => {
                // Usuń switch-move ze słońca przed animacją
                sun.classList.remove('switch-move');
                sun.classList.remove('switch-hide');
                sun.classList.add('switch-show');
                

                // Usuń switch-move z księżyca po jego zniknięciu

            }, 200);
        }
    });
});

