// initial state
const state = {
    list: []
}

// getters
const getters = {
    cartCount: state =>
        state.list
            .map(item => item.quantity)
            .reduce((acc, curr) => acc + curr, 0),
    cartTotal: (state, _, rootState) =>
        state.list
            .map(c => rootState.coffees.list.find(x => x.name === c.name).price * c.quantity)
            .reduce((acc, curr) => acc + curr, 0),
    cartList: (state, _, rootState) =>
        state.list
            .map(item => {
                // get coffee object by name
                const { price, ...props } = rootState.coffees.list.find(
                    c => c.name === item.name
                );

                return {
                    quantity: item.quantity,
                    unitPrice: price,
                    price: item.quantity * price, // sum quantity
                    ...props
                };
            })
            .sort((a, b) => (a.name < b.name ? -1 : 1))
}

// actions
const actions = {
}

// mutations
const mutations = {
    setCartList(state, { items }) {
        state.list = items
    },
    addToCart(state, coffee) {
        const { quantity = 0 } = state.list.find(x => x.name === coffee) || {}

        const list = [
            ...state.list.filter(x => x.name !== coffee),
            {
                name: coffee, quantity: quantity + 1
            }
        ];

        state.list = list
    },
    emptyCart() {
        state.list = []
    },
    removeCartItem(state, coffee) {
        const list = [...state.list.filter(x => x.name !== coffee)]

        state.list = list
    },
    addOneCartItem(state, coffee) {
        mutations.addToCart(state, coffee)
    },
    removeOneCartItem(state, coffee) {
        const item = state.list.find(x => x.name === coffee);

        const list = [
            ...state.list.filter(x => x.name !== coffee),
            ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
        ];

        state.list = list
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}