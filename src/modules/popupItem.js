const popupItem = (item, icon, closeItem) => {
    const popupItem = document.querySelector(item);
    const addClass = () => {
        popupItem.classList.add('active');
    };
    const removeClass = () => {
        popupItem.classList.remove('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.closest(closeItem) ||
        e.target.closest(item) === null) {
            removeClass();
        }
        if (e.target.closest(icon)) {
            addClass();
        }
    });
};

export default popupItem;