import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "estado_caja_texto"){
        return {
            estado: action.estadoo,
        }   
    }
    return state;
}

export default createStore(reducer, { estado: false }) 