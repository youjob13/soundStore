'use strict';

import toggleMenu from './modules/menu';
import selectProduct from './modules/selectProduct';
import selectColor from './modules/selectColor';
import selectRegistration from './modules/selectRegistration';
import popupItem from './modules/popupItem';
import preloader from './modules/preloader';

toggleMenu();
selectProduct();
selectColor();
selectRegistration();
popupItem('.popup-favorite', '.favorite', '.popup-favorite-close');
popupItem('.popup-login', '#login', '.popup-login-close');
popupItem('.popup-cart', '.cart', '.popup-cart-close');
preloader();