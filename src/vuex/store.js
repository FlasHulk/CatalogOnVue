import { createStore } from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import favorites from './modules/favorites'

const store =  createStore({
    modules: {
        products,
        cart,
        favorites
    },
});

export default store;