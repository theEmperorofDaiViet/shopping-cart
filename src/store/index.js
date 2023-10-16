import { createStore } from 'vuex';
import cart from './modules/cart';
import product from './modules/product';
import login from './modules/login';

export default createStore({
    modules: {
        cart,
        product,
        login
    }
});