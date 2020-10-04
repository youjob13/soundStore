const popupFavorite = () => {
    const favoritePopup = document.querySelector('.popup-favorite');
    const toggleClass = () => {
        favoritePopup.classList.toggle('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite') || e.target.matches('.popup-favorite-close')) {
            toggleClass();
        }
    });

};

export default popupFavorite;