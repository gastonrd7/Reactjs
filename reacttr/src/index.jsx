import React, { Component } from 'react'
//llamamos solo a la carpeta, ya que esta contiene solo//
//un jsx que se llama index
import App from '../src/components/App/'
//destructuring
import { render } from 'react-dom'

render(<App />, document.getElementById('root'))
