document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Abrir/cerrar menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mainNav.classList.toggle('show');
        document.body.style.overflow = mainNav.classList.contains('show') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace
    mainNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mainNav.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if(!mainNav.contains(e.target) && !menuToggle.contains(e.target)){
            mainNav.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
        if(mainNav.classList.contains('show')) {
            mainNav.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});
