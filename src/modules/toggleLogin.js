const toggleLogin = () => {
    const popupLogin = document.querySelector('.popup-login');
    const toggleClass = () => {
        popupLogin.classList.toggle('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.closest('#login') || e.target.matches('.popup-login-close')) {
            toggleClass();
        }
    });
};

export default toggleLogin;