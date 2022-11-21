import axios from "axios";

const state = {
    products: [],
    priceValue: []
};

const mutations = {
    set_product: (state, products) => {
        state.products = products;

        let max = Math.max.apply(null, state.products.map(item => {
                return item.price;
            })),
            min = Math.min.apply(null, state.products.map(item => {
                return item.price;
            }));

        state.priceValue.push(min, max);
    }
};

const actions = {
    get_product({commit}) {
				//local settings
        return axios("http://localhost:3000/products", {
				//prod settings
        // return axios("../db.json", {
            method: "GET"
        }).then((products) => {
            commit("set_product", products.data);
            return products.data;
        }).catch((error) => {
            console.log("error");
            return error;
        })
    }
};

const getters = {
    PRODUCT(state) {
        return state.products
    },
    PRICEVALUE(state) {
        return state.priceValue
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}