import { combineReducers } from 'redux'
import usuario from './store'
import mensajes from './storeMensajes'

const todoApp = combineReducers({
  usuario,
  mensajes
})

export default todoApp