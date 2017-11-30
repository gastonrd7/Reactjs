const initialState = {
    productList: {
        products: [],
        error: false,
        loading: false
    },
    activeProduct: {
        product: null,
        error: false,
        loading: false
    },
    cart: {
        items: [],
        total: 0
    }
}

export default initialState;