document.addEventListener("DOMContentLoaded", () => {
    // Hamburger
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
    });

    // Dropdowny
    const toggles = document.querySelectorAll('[data-dropdown-toggle]');
    toggles.forEach(toggle => {
        const menuId = toggle.getAttribute('data-dropdown-toggle');
        const menu = document.getElementById(menuId);

        toggle.addEventListener('click', e => {
            e.preventDefault();
            const wasHidden = menu.classList.contains('hidden');

            // zamknij wszystkie
            document.querySelectorAll('.submenu').forEach(sub => sub.classList.add('hidden'));

            // jeśli było wcześniej schowane – otwórz je
            if (wasHidden) menu.classList.remove('hidden');
            if (!wasHidden) menu.classList.add('hidden');
        });
    });


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

document.getElementById('darkSwitch').addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});