const selectPhoto = () => {
    const photoPreview = document.querySelector('.product-other-item').querySelectorAll('img');
    const photoItem = document.querySelector(".product-img").querySelector('img');
    const getPhoto = (item) => {
        item.classList.add('active');
        photoItem.setAttribute('src', `${item.getAttribute('src')}`);
    };
    const removeClass = (item) => {
        item.classList.remove('active');
    };

    document.addEventListener('mouseover', e => {
        if (e.target.closest('.product-other-item')) {
            photoPreview.forEach(item => {
                if (e.target === item) {
                    getPhoto(item);
                } else {
                    removeClass(item);
                }
            });
        }
    });
};

export default selectPhoto;