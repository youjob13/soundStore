const popupItem = (item, icon, closeItem) => {
    const popupItem = document.querySelector(item);
    const toggleClass = () => {
        popupItem.classList.toggle('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.closest(icon) || e.target.closest(closeItem)) {
            toggleClass();
        }
    });
};

export default popupItem;