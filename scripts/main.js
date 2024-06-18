document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    } else {
        console.error('Menu icon or menu not found in the DOM');
    }
});
