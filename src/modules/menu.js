const toggleMenu = () => {
    const menu = document.querySelector('.menu-nav');
    const search = document.querySelector('.search');
    document.addEventListener('click', e => {
        if (e.target.closest('.menu-button')) {
            menu.classList.toggle('active');
            if (document.body.clientWidth > 900) {
                search.classList.toggle('active');
            }
        }
    });
};

export default toggleMenu;