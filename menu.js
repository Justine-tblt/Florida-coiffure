document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
