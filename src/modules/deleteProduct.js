const deleteProduct = (arr, color, target, item) => {
    arr.splice(+(target.closest(`.popup-${item}-item`).getAttribute('class').replace(/\D+/, '')), 1);
    color.splice(+(target.closest(`.popup-${item}-item`).getAttribute('class').replace(/\D+/, '')), 1);
};

export default deleteProduct;