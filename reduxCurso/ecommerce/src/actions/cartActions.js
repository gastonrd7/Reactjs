import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    LOAD_CART_ITEMS
} from './types'

export function loadCartItems() {
    return {
        type: LOAD_CART_ITEMS
    }
}

export function addCartItem(item) {
    return {
        type: ADD_CART_ITEM,
        payload: item
    }
}

export function removeCartItem(item) {
    return {
        type: REMOVE_CART_ITEM,
        payload: item
    }
}

