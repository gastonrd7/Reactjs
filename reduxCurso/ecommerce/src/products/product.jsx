//componente representacional, no va a ser una clase ni tendra estado, sera una funcion, con sintaxis de jsx
//toda la info que necesite las va a recibir por propiedades, usa boostrap como estilo
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Product = ({
  _id,
  name,
  description,
  image,
  price,
  deliveryStimate,
  category,
  onAddItem
}) => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
    <div className="card">
      <Link to={`/detail/${_id}`}>
        <img className="card-img-top" width="100%" src={image} alt={description} />
      </Link>
      <div className="card-block">
        <Link to={`/detail/${_id}`}>
          <h4 className="card-title">{name}</h4>
        </Link>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>{price} &euro;</strong>
        </li>
        <li className="list-group-item">
          <strong>Entrega: </strong> {deliveryStimate}
        </li>
        <li className="list-group-item">
          <span className="badge badge-pill badge info">{category}</span>
        </li>
      </ul>
      <div className="card-block">
        <button
          className="btn btn-primary"
          onClick={() => onAddItem({_id,name,description,image,price,deliveryStimate,category})}
        >
          <span className="fa fa-cart-plus" /> Añadir al carrito
        </button>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  deliveryStimate: PropTypes.string
  //category: PropTypes.string.isRequired
};

export default Product;
