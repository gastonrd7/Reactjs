import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "cargar_usuario"){
        return {
            user: action.user,
        }   
    } else if (action.type === "actualizar_usuario"){
        return {
            user: action.usuarioo,
        }   
    }
    return state;
}

export default createStore(reducer, { user: [] }) 