document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function () {
            navbar.classList.toggle('hidden');
        });
    }

    // Dropdown: PSO
    const dropdownBtn = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', function (e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                dropdownMenu.classList.toggle('hidden');
            }
        });
        document.addEventListener('click', function (e) {
            if (
                window.innerWidth < 1024 &&
                !dropdownMenu.contains(e.target) &&
                !dropdownBtn.contains(e.target)
            ) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
    // Dropdown: Zawód ortoptystki
    const zawodBtn = document.getElementById('dropdownZawodLink');
    const zawodMenu = document.getElementById('dropdownZawod');
    if (zawodBtn && zawodMenu) {
        zawodBtn.addEventListener('click', function (e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                zawodMenu.classList.toggle('hidden');
            }
        });
        document.addEventListener('click', function (e) {
            if (
                window.innerWidth < 1024 &&
                !zawodMenu.contains(e.target) &&
                !zawodBtn.contains(e.target)
            ) {
                zawodMenu.classList.add('hidden');
            }
        });
    }
    // Dropdown: Dla specjalistów
    const specBtn = document.getElementById('dropdownSpecLink');
    const specMenu = document.getElementById('dropdownSpec');
    if (specBtn && specMenu) {
        specBtn.addEventListener('click', function (e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                specMenu.classList.toggle('hidden');
            }
        });
        document.addEventListener('click', function (e) {
            if (
                window.innerWidth < 1024 &&
                !specMenu.contains(e.target) &&
                !specBtn.contains(e.target)
            ) {
                specMenu.classList.add('hidden');
            }
        });
    }
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

