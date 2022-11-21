// import axios from "axios";

const state = {
    cart: []
};

const mutations = {
    set_cart: (state, product) => {
        //@TODO избавится от вложенности if
        //@TODO избавится от isPush, предлодить другой вариант
        if (state.cart.length) {
            let isPush = false;

            state.cart.map((item) => {
                if (item.id === product.id) {
                    isPush = true;
                    item.quantity++;
                }
            });

            if (!isPush) {
                product.quantity = 1;
                state.cart.push(product);
            }
        } else {
            product.quantity = 1;
            state.cart.push(product);
        }
    },
    remove_from_cart: (state, key) => {
        //@TODO добавить проверку на наличие товара в корзине
        //@TODO удаление нужно делать по id товара а не по порядковому номеру (как в favorites)

        state.cart.splice(key, 1)
    },
    decrement_quantity: (state, key) => {
        //@TODO добавить проверку на наличие товара в корзине
        if (state.cart[key].quantity <= 1) {
            state.cart.splice(key, 1)
        } else {
            state.cart[key].quantity--
        }
    },
    increment_quantity: (state, key) => {
        //@TODO добавить проверку на наличие товара в корзине
        state.cart[key].quantity++
    },
    clear_cart: (state) => {
        state.cart.length = 0
    }
};

const actions = {
    add_to_cart({commit}, product) {
        commit('set_cart', product);
    },
    remove_from_cart({commit}, key) {
        commit('remove_from_cart', key)
    },
    decrement_quantity({commit}, key) {
        commit('decrement_quantity', key)
    },
    increment_quantity({commit}, key) {
        commit('increment_quantity', key)
    },
    clear_cart({commit}) {
        commit('clear_cart')
    }
};

const getters = {
    CART(state) {
        return state.cart
    },
    get_total_price(state) {
        return state.cart.reduce((previous, current) => previous + (current.quantity * current.price), 0)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}