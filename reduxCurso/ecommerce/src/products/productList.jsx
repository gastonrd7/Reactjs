import React, { PropTypes } from 'react'
import Product from './product'

const ProductList = ({
    loading,
    products
}) => {
    <section className="container">
        { loading && <span>Cargando datos...</span> }
        <div className="row">
        {
            products.map(product => (
            <Product
                key={uuid.v4()}
                {...product}
            />
            ))
        }
        </div>
    </section>
}

ProductList.PropTypes = {
    loading: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

//{ loading && <span>Cargando datos...</span> }
// En vez de poner un if, preguntamos por la propiedad loading que es bool
//En caso de ser true el && hace de then y dibuja el span

//luego recooro productos, que me entra por parametro y dibujo Product
//a cada item le asigno un id autogenerado
//y luego le paso todas las propiedades de product con ...product

export default ProductList