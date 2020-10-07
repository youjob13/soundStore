const selectColor = () => {
    const colorItems = document.querySelectorAll('.palette-colours_item');
    const photoItem = document.querySelector('.change-color');
    const addClass = (elem) => {
        elem.classList.add('active');
        photoItem.style.setProperty('--module-color', elem.value + 'deg');
    };
    const removeClass = (elem) => {
        elem.classList.remove('active');
    };

    document.addEventListener('click', e => {
        if (e.target.matches('.palette-colours_item')) {
            colorItems.forEach((item, index) => {
                if (item === e.target) {
                    addClass(item, index);
                } else {
                    removeClass(item, index);
                }
            });
        }
    });
};

export default selectColor;