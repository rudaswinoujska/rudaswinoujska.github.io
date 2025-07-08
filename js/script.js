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
        // Zablokuj checkbox na czas animacji
        checkbox.disabled = true;

        if (checkbox.checked) {
            sun.classList.add('switch-move');
            sun.classList.remove('switch-show');
            sun.classList.add('switch-hide');

            setTimeout(() => {
                moon.classList.add('switch-move');
                moon.classList.remove('switch-hide');
                moon.classList.add('switch-show');
                // Odblokuj checkbox po animacji
                checkbox.disabled = false;
            }, 200);

        } else {
            moon.classList.remove('switch-move')
            moon.classList.remove('switch-show');
            moon.classList.add('switch-hide');

            setTimeout(() => {
                sun.classList.remove('switch-move');
                sun.classList.remove('switch-hide');
                sun.classList.add('switch-show');
                // Odblokuj checkbox po animacji
                checkbox.disabled = false;
            }, 200);
        }
    });
});

