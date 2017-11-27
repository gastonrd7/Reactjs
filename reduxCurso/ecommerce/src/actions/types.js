//Cart actions
export const LOAD_CART_ITEMS = 'LOAD_CART_ITEMS'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

//Product actions (Async)
//Vamos a generar 2 tipos para las asincronas, al usar promesas tenemos 2 posibles
//resultados, el exitoso y el fallido
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS'
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE'
