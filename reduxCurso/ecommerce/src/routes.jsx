import React from 'react'
import { Route, IndexRoute } from 'react-router'

//Debemos definir los componenetes que queremos que actuen como paginas y se rendericen cada vez que se cambie la url
//Lo vamos a configurar con react-router, los vamos a llamar containers, y estos van a ser los que se van a 
//comunicar con la store de redux y a travez de propiedades iran transmitiendo a los hijos, que seran componentes
//mas funcionales los cambios de estado que se produzcan.

import App from './App'
import ProductListContainer from './products/ProductListContainer'

//como usamos la rutas anidadas, decimos que 'ProductListContainer' va a estar incrustado en 'App'
//por eso luego en el componente app, usamos this.props.children para decirle donde va a 
//renderizarse el componente hijo.
export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProductListContainer} />
    </Route>
)