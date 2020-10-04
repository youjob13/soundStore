const toggleMenu = () => {
    const menu = document.querySelector('.menu-nav');
    document.addEventListener('click', e => {
        if (e.target.closest('.menu-button')) {
            menu.classList.toggle('active');
        }
    });
};

export default toggleMenu;