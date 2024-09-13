// script.js

const toggleSwitch = document.getElementById('toggle-btn');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggleSwitch.checked);
    
    // Sauvegarde la préférence de l'utilisateur
    if (toggleSwitch.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Charge la préférence de l'utilisateur au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }
});
