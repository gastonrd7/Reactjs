import {
    FETCH_PRODUCT_INIT,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_INIT,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
    SAVE_PRODUCT_INIT,
    SAVE_PRODUCT_FAILURE,
    SAVE_PRODUCT_SUCCESS
} from './types'
import Api from '../api'

//actions creators sicronas para ambos caminos success o failure
export function fetchProductsSuccess(products){
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsFailure(error){
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export function fetchProductSuccess(product){
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export function fetchProductFailure(error){
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export function saveProductSuccess(){
    return {
        type: SAVE_PRODUCT_SUCCESS
    }
}

export function saveProductFailure(error){
    return {
        type: SAVE_PRODUCT_FAILURE,
        payload: error
    }
}

// a estos metodos seguramente va a llamar los componentes
//actions creators (async)
export function fetchProducts(){
    return async (dispatch => {
        dispatch(() => {
            return {
                type: FETCH_PRODUCTS_INIT
            }
        })

        try {
            const data = await api.products.getAll()
            return dispatch(saveProductSuccess(data.products))
        } catch (error) {
            return dispatch(fetchProductsFailure(error))
        }
    })
}
export function fetchProduct(productId){
    return async (dispatch => {
        dispatch(() => {
            return {
                type: FETCH_PRODUCT_INIT
            }
        })

        try {
            const data = await api.products.getSingle(productId)
            return dispatch(fetchProductSuccess(data.product))
        } catch (error) {
            return dispatch(fetchProductFailure(error))
        }
    })
}
export function saveProduct(product){
    return async (dispatch => {
        dispatch(() => {
            return {
                type: SAVE_PRODUCT_INIT
            }
        })

        try {
            await api.products.save(product)
            return dispatch(saveProductSuccess())
        } catch (error) {
            return dispatch(saveProductFailure(error))
        }
    })
}