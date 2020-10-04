const addFavorite = (arr, color) => {
    const favoriteList = document.querySelector('.popup-favorite-list');
    favoriteList.textContent = '';
    arr.forEach((item, index) => {
        const favorite = document.createElement('li');
        const favoriteText = document.createElement('p');
        const favoriteImg = document.createElement('img');
        favorite.classList.add('popup-favorite-item');
        favoriteImg.classList.add('popup-favorite-img');
        favoriteText.innerHTML = item.name;
        favoriteImg.setAttribute('src', `${item.img[0]}`);
        favoriteList.append(favorite);
        favorite.append(favoriteText);
        favorite.append(favoriteImg);
        color.forEach((elem, i) => {
            if (index === i) {
                favoriteImg.setAttribute('style', `${elem}`);
            }
        });
    });
};

export default addFavorite;