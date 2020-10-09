'use strict';

import toggleMenu from './modules/menu';
import selectProduct from './modules/selectProduct';
import selectColor from './modules/selectColor';
import selectRegistration from './modules/selectRegistration';
import popupItem from './modules/popupItem';
import preloader from './modules/preloader';
import SliderCarousel from './modules/sliderCarousel';
import toggleCatalogList from './modules/toggleCatalogList';
// import sliderProduct from './modules/sliderProduct';

toggleMenu();
selectProduct();
selectColor();
selectRegistration();
popupItem('.popup-favorite', '.favorite', '.popup-favorite-close');
popupItem('.popup-login', '#login', '.popup-login-close');
popupItem('.popup-cart', '.cart', '.popup-cart-close');
preloader();
const sliderFooter = new SliderCarousel({
    main: ".payment-slider-wrapper",
    wrap: ".payment-slider",
    prev: "#payment-arrow-left",
    next: "#payment-arrow-right",
    slidesToShow: 2,
    infinity: true
});
sliderFooter.init();
toggleCatalogList();
// sliderProduct();