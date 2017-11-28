import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//nos poermite utilizar la extension de chrome redux dev tools
//nos permite ir hacia delante y hacia atras en el tiempo, segun el estado de nuestra aplicacion
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

//va a hacer el que componga las reducedevtools con los middleware que vayamos instalando
//estamos instalando somanete logger, 
//pero luego instalamremos otros, para el manoejo de acciones
//asincronas
const enhancer = composeWithDevTools(
  //el orden es importante, porque se van a ir ejecutando segun esten colocados aca
  applyMiddleware(thunk, logger())
);

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer);
};