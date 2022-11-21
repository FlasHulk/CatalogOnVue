const state = {
    favorites: []
};

const mutations = {
    set_favorites: (state, product) => {
        let index = state.favorites.findIndex((item) => item.id === product.id);

        if (index != -1) {
            state.favorites.splice(index, 1)
        } else {
            state.favorites.push(product);
        }
    }
};

const actions = {
    add_to_favorites({commit}, product) {
        commit('set_favorites', product);
    }
};

const getters = {
    FAVORITES(state) {
        return state.favorites
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}