


    document.addEventListener('DOMContentLoaded', function () {
        const burgerIcon = document.querySelector('.navbar-toggler');
        const menuList = document.getElementById('menu-list');
        const close_modal = document.querySelector('.close_modal');

        burgerIcon.addEventListener('click', function () {
            // Переключаем положение меню
            menuList.style.left = (menuList.style.left === '0%') ? '-100%' : '0%';
        });
        close_modal.addEventListener('click', function () {
            menuList.style.left = (menuList.style.left === '100%') ? '100%' : '-100%';
        })
    });
