const sliderCatalog = () => {
    const catalogList = document.querySelector('.catalog-list'),
     catalogItem = catalogList.querySelectorAll('.catalog-item');
    let currentItem = 0;

    const nextItem = (elem, index) => {
        elem[index].classList.add('active');
        catalogList.style.cssText = `
        transform: translateY(-${elem[index].offsetTop}px)`;
    };
    const prevItem = (elem, index) => {
        elem[index].classList.remove('active');
    };

    document.addEventListener('click', e => {
        if (e.target.matches('#arrow-up') || e.target.matches('#arrow-down')) {
            prevItem(catalogItem, currentItem);
            if (e.target.matches('#arrow-down')) {
                currentItem++;
            }
            if (e.target.matches('#arrow-up')) {
                currentItem--;
            }
            if (currentItem >= catalogItem.length - 1) {
                currentItem = 0;
            }
            if (currentItem < 0) {
                currentItem = catalogItem.length - 1;
            }
            nextItem(catalogItem, currentItem);
        }
    });

};

export default sliderCatalog;