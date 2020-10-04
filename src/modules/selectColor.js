const selectColor = () => {
    const colorItems = document.querySelectorAll('.palette-colours_item');
    const photoItem = document.querySelector('.change-color');
    const addClass = (elem, index) => {
        elem.classList.add('active');
        console.log(elem);
        photoItem.style.setProperty('--module-color', elem.value + 'deg');
    };
    const removeClass = (elem) => {
        elem.classList.remove('active');
    };
    const input = document.querySelector('.product-info').querySelector('input');
    input.addEventListener('input', () => {
        photoItem.style.setProperty('--module-color', input.value + 'deg');
    });
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