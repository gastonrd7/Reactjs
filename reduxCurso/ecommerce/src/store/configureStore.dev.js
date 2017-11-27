import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
//nos poermite utilizar la extension de chrome redux dev tools
//nos permite ir hacia delante y hacia atras en el tiempo, segun el estado de nuestra aplicacion
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

//va a hacer el que componga las reducedevtools con los middleware que vayamos instalando
//estamos intalando somanete logger, 
//pero luego instalamremos otros, para el manoejo de acciones
//asincronas
const enhancer = composeWithDevTools(
  applyMiddleware(logger())
);

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer);
};