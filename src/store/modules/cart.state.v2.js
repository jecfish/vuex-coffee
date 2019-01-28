/** Change to object for performance */
import Vue from "vue";

// initial state
const state = {
    list: {}
};

// getters
const getters = {
    cartCount(state) {
        return Object.values(state.list).reduce((acc, curr) => acc + curr, 0);
    },
    cartList(state, _, rootState) {
        return Object.keys(state.list)
            .map(item => {
                // get coffee object by name
                const { price, ...props } = rootState.coffees.list.find(
                    c => c.name === item
                );

                return {
                    quantity: state.list[item].quantity,
                    unitPrice: price,
                    price: state.list[item] * price, // sum quantity
                    ...props
                };
            })
            .sort((a, b) => (a.name < b.name ? -1 : 1));
    },

    cartTotal(state, _, rootState) {
        return Object.keys(state.list)
            .map(
                c =>
                    rootState.coffees.list.find(x => x.name === c).price * state.list[c]
            )
            .reduce((acc, curr) => acc + curr, 0);
    }
};

// actions
const actions = {};

// mutations
const mutations = {
    addToCart(state, name) {
        state.list = {
            ...state.list,
            [name]: (state.list[name] || 0) + 1
        };
    },

    removeCartItem(state, coffee) {
        Vue.delete(state.list, coffee);

        // state.list = list;
    },

    addOneCartItem(state, coffee) {
        mutations.addToCart(state, coffee);
    },

    removeOneCartItem(state, coffee) {
        if (state.list[coffee] <= 1) {
            mutations.removeCartItem(state, coffee);
            return;
        }

        state.list = {
            ...state.list,
            [coffee]: (state.list[coffee] || 0) - 1
        };
    },

    emptyCart() {
        state.list = {};
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
