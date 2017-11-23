import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "cargar_usuario"){
        return {
            state: state,
            user: action.user,
            numero: 1
        }   
    }
    return state;
}

export default createStore(reducer, [{ user: [] }, { numero: 0 }]) 