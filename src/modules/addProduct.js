const addProduct = (menuItem, arr, color) => {
    const elemList = document.querySelector(`.popup-${menuItem}-list`);
    elemList.textContent = '';
    arr.forEach((item, index) => {
        const elem = document.createElement('li');
        const elemText = document.createElement('p');
        const elemImg = document.createElement('img');
        const elemDelete = document.createElement('a');
        elem.classList.add(`popup-${menuItem}-item`);
        elem.classList.add(`popup-${menuItem}-item-${index}`);
        elemImg.classList.add(`popup-${menuItem}-img`);
        elemDelete.classList.add(`popup-${menuItem}-delete`);
        elemText.innerHTML = item.name;
        elemImg.setAttribute('src', `${item.img[0]}`);
        elemList.append(elem);
        elem.append(elemText);
        elem.append(elemImg);
        elem.append(elemDelete);
        color.forEach((elem, i) => {
            if (index === i) {
                elemImg.setAttribute('style', `${elem}`);
            }
        });
    });
};

export default addProduct;