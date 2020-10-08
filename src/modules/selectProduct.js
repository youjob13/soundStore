import addProduct from './addProduct';
import deleteProduct from './deleteProduct';
import popupItem from './popupItem';

const selectProduct = () => {
    const product = document.querySelector('.product-img').querySelector('img'),
        titleProduct = document.querySelector('.product-name'),
        previewPhoto = document.querySelector('.product-other-item'),
        ul = document.querySelector('.catalog-list');
    let previewPhotos,
        currentItem;
    const favorite = {
        favoriteArr: localStorage['favoriteArr'] ? JSON.parse(localStorage['favoriteArr']) : [],
        favoriteColor: localStorage['favoriteColor'] ? JSON.parse(localStorage['favoriteColor']) : []
    };
    const cart = {
        cartArr: localStorage['cartArr'] ? JSON.parse(localStorage['cartArr']) : [],
        cartColor: localStorage['cartColor'] ? JSON.parse(localStorage['cartColor']) : []
    };
    fetch("catalog/catalog.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error("Ошибка");
        }
        const result = response.json();
        return result;
    }).then((result) => {
        addProduct('favorite', favorite.favoriteArr, favorite.favoriteColor);
        addProduct('cart', cart.cartArr, cart.cartColor);
        getItem(result[0]);
        result.forEach(item => getCatalog(item));
        ul.children[0].classList.add('active');
        previewPhoto.children[0].classList.add('active');
        document.querySelector('.change-color').style.setProperty('--module-color', '0deg');

        document.addEventListener('click', e => {
            if (e.target.closest('.catalog-item')) {
                result.forEach(item => {
                    if (e.target.getAttribute('src') === item.img[0]) {
                        toggleClassCatalog(e.target.closest('.catalog-item'));
                        previewPhoto.children[0].classList.add('active');
                        getItem(item);
                    }
                });
            }
            if (e.target.closest('.popup-favorite-item')) {
                favorite.favoriteArr.forEach(item => {
                    favorite.favoriteColor.forEach(elem => {
                        if (item.name.replace(/<br>/, '') === e.target.closest('.popup-favorite-item').querySelector('p').textContent &&
                            e.target.closest('.popup-favorite-item').querySelector('img').getAttribute('style').replace(/\D/gi, '') === elem) {
                            getAddedItem(item, elem);
                        }
                    });
                });
            }
            if (e.target.closest('.popup-cart-item')) {
                cart.cartArr.forEach(item => {
                    cart.cartColor.forEach(elem => {
                        if (item.name.replace(/<br>/, '') === e.target.closest('.popup-cart-item').querySelector('p').textContent &&
                            e.target.closest('.popup-cart-item').querySelector('img').getAttribute('style').replace(/\D/gi, '') === elem) {
                            getAddedItem(item, elem);
                        }
                    });
                });
            }
            if (e.target.closest('.popup-favorite-delete') ||
                e.target.closest('.product-favorite')) {
                if (e.target.closest('.popup-favorite-delete')) {
                    deleteProduct(favorite.favoriteArr, favorite.favoriteColor, e.target, 'favorite');
                    addProduct('favorite', favorite.favoriteArr, favorite.favoriteColor);
                }
                if (e.target.closest('.product-favorite')) {
                    favorite.favoriteArr.push(currentItem);
                    favorite.favoriteColor.push(product.getAttribute('style').replace(/\D/gi, ''));
                    addProduct('favorite', favorite.favoriteArr, favorite.favoriteColor);
                }
                localStorage.setItem('favoriteArr', JSON.stringify(favorite.favoriteArr));
                localStorage.setItem('favoriteColor', JSON.stringify(favorite.favoriteColor));
            }
            if (e.target.closest('.popup-cart-delete') ||
                e.target.closest('.product-cart')) {
                if (e.target.closest('.product-cart')) {
                    cart.cartArr.push(currentItem);
                    cart.cartColor.push(product.getAttribute('style').replace(/\D/gi, ''));
                    addProduct('cart', cart.cartArr, cart.cartColor);
                }
                if (e.target.closest('.popup-cart-delete')) {
                    deleteProduct(cart.cartArr, cart.cartColor, e.target, 'cart');
                    localStorage.removeItem('cartArr');
                    localStorage.removeItem('cartColor');
                    addProduct('cart', cart.cartArr, cart.cartColor);
                }
                localStorage.setItem('cartArr', JSON.stringify(cart.cartArr));
                localStorage.setItem('cartColor', JSON.stringify(cart.cartColor));
            }


        });
        previewPhotos = document.querySelector('.product-other-item').querySelectorAll('img');
        document.addEventListener('mouseover', e => {
            if (e.target.closest('.product-other-item img')) {
                previewPhotos.forEach(item => {
                    if (e.target === item) {
                        getPhoto(item);
                    } else {
                        removeClass(item);
                    }
                });
            }
        });
    }).catch((error) => console.error(error));

    const toggleClassCatalog = (target) => {
        const catalogItems = document.querySelectorAll('.catalog-item');
        catalogItems.forEach(item => {
            if (item === target) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    const getPhoto = (item) => {
        item.classList.add('active');
        product.setAttribute('src', `${item.getAttribute('src')}`);
    };
    const removeClass = (item) => {
        item.classList.remove('active');
    };

    const getPreviewPhoto = (elem) => {
        const img = document.createElement('img');
        img.setAttribute('src', `${elem}`);
        previewPhoto.append(img);
    };

    const getCatalog = (elem) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const name = document.createElement('p');
        li.classList.add('catalog-item');
        img.classList.add('catalog-item_img');
        name.classList.add('catalog-item-text');
        img.setAttribute('src', `${elem.img[0]}`);
        name.innerHTML = `${elem.name}`;
        ul.append(li);
        li.append(name);
        li.append(img);
    };

    const getAddedItem = (catalogItem, colorItem) => {
        previewPhoto.textContent = '';
        const photoArr = catalogItem.img;
        product.setAttribute('src', `${photoArr[0]}`);
        product.style.setProperty('--module-color', colorItem + 'deg');
        titleProduct.innerHTML = `${catalogItem.name}`;
        photoArr.forEach((elem, i) => {
            getPreviewPhoto(elem, colorItem);
        });
        previewPhotos = document.querySelector('.product-other-item').querySelectorAll('img');
        currentItem = catalogItem;
    };

    const getItem = (catalogItem) => {
        previewPhoto.textContent = '';
        const photoArr = catalogItem.img;
        product.setAttribute('src', `${photoArr[0]}`);
        titleProduct.innerHTML = `${catalogItem.name}`;
        photoArr.forEach((elem, i) => {
            getPreviewPhoto(elem);
        });
        previewPhotos = document.querySelector('.product-other-item').querySelectorAll('img');
        currentItem = catalogItem;
    };
};

export default selectProduct;