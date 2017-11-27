import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
    SAVE_PRODUCT_FAILURE,
    SAVE_PRODUCT_SUCCESS
} from './types'

export function fetchProductsSuccess(products){
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsError(error){
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

export function fetchProductError(error){
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export function saveProductSuccess(product){
    return {
        type: SAVE_PRODUCT_SUCCESS,
        payload: product
    }
}

export function saveProductError(error){
    return {
        type: SAVE_PRODUCT_FAILURE,
        payload: error
    }
}