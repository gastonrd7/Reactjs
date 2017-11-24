import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "cargar_mensajes"){
        return {
        listmessages: state.listmessages.concat(action.mensajesssss)
        }   
    }
    else if (action.type === "reemplazar_mensajes"){
        return {
        listmessages: action.mensajess
        }   
    }
    return state;
}

export default createStore(reducer, { listmessages: [] }) 