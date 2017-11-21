import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "cargar_usuario"){
        return {
            ...state,
        user: action.user
        }   
    } 
    else if (action.type === "cargar_mensajes"){
        return {
            ...state,
        messages: this.state.messages.concat(action.messages)
        }   
    }
    else if (action.type === "carga_estado_cajaTexto"){
        return {
            ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
        }   
    }
    else if (action.type === "cargar_usuario_a_replicar"){
        return {
            ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
        }   
    }
    return state;
}

export default createStore(reducer, { user: [], openText: false, userNameToReply: '', messages: [] }) 