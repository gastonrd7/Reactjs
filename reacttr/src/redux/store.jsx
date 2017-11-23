import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "cargar_usuario"){
        return {
            state: state,
        user: action.user
        }   
    }
    return state;
}

export default createStore(reducer, { user: [] }) 