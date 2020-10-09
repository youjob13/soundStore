import sliderProduct from './sliderProduct';

const getPhoto = (target,selectSlide) => {
    const product = document.querySelector('.product-img'),
        productList = product.querySelector('img'),
        previewPhotos = document.querySelector('.product-other-item').querySelectorAll('img');
    const addClass = (productList,item) => {
        item.classList.add('active');
        productList.setAttribute('src', `${item.getAttribute('src')}`);
    };
    const removeClass = (item) => {
        item.classList.remove('active');
    };
    previewPhotos.forEach((item,index) => {
        if (target.getAttribute('src') === item.getAttribute('src')) {
            selectSlide = index;
            sliderProduct(selectSlide);
            addClass(productList,item);
        } else {
            removeClass(item);
        }
    });
    return selectSlide;
};

export default getPhoto;
