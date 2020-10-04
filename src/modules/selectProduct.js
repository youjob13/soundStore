const selectProduct = () => {
    const product = document.querySelector('.product-img').querySelector('img'),
        titleProduct = document.querySelector('.product-name'),
        previewPhoto = document.querySelector('.product-other-item'),
        ul = document.querySelector('.catalog-list');
    let previewPhotos;
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
        getItem(result[0]);
        result.forEach(item => getCatalog(item));
        document.addEventListener('click', e => {
            result.forEach(item => {
                if (e.target.getAttribute('src') === item.img[0]) {
                    getItem(item);
                }
            });
        });
        previewPhotos = document.querySelector('.product-other-item').querySelectorAll('img');
        document.addEventListener('mouseover', e => {
            if (e.target.closest('.product-other-item')) {
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
        li.classList.add('catalog-item');
        img.classList.add('catalog-item_img');
        img.setAttribute('src', `${elem.img[0]}`);
        ul.append(li);
        li.append(img);
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
    };
};

export default selectProduct;