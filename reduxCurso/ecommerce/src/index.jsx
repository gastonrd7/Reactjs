import 'babel-polyfill' //que se utilice el polyliff de babel en caso de que haya algun error
import React from 'react' //vamos a utilizar ecmaScript 6
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router' //maneja el enrutado de la aplicacion
import { Provider } from 'react-redux' //este conecta react con redux,
import { syncHistoryWithStore } from 'react-router-redux' //para el tema de los estados cuando se enruta

import routes from './routes' //esto es cargado como una propiedad de Router dentro de providers, y este es 
//que va a generar el App y su componenete asociado
import configureStore from './store/configureStore'
import initialState from './reducers/initialState' //este es opcional, despues sabre porque lo es

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store) //los cambios de tura del browser se asocian al store

//El provider va a ser el que engloque a nuestra aplicaciones y maneje el estado de esta
//el history, si no hubiesemos sincronizado el enrutamiento con nuestro store, directamente iba browserHistory de react-router,
//pero le metemos la constante history ya que asociamos el browserHistory al store

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)