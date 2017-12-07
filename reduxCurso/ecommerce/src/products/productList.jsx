//componenete funcional, no extiende de componenet, se genera como una funcion, lenetran los valores por parametro
import React, { PropTypes } from 'react'
import uuid from 'uuid'

const ProductList = ({
    loading,
    products
}) => (
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
)

// { loading && <span>Cargando datos...</span> }
// significa que si loading que es te tipo bool esta en true se dibuja el span
// {...product} : le paso por parametro todas las propiedades de product con el ...
// key={uuid.v4()} genero un Id autogenerado

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
  };
  
  export default ProductList;