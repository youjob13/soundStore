const toggleCatalogList = () => {
    const catalogList = document.querySelector('.catalog');
    const catalogArrow = document.querySelector('.catalog-arrow');
    document.addEventListener('click', e => {
        if (e.target.closest('#catalog-arrow')) {
            catalogList.classList.toggle('active');
            catalogArrow.classList.toggle('active');
        }
    });
};

export default toggleCatalogList;