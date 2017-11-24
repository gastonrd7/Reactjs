import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === "nombre_a_replicar"){
        return {
            userNameToReply: action.nombree,
        }   
    }
    return state;
}

export default createStore(reducer, { userNameToReply: '' }) 