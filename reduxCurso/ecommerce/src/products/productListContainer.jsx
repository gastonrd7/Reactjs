import React, {Component, PropTypes } from 'react'
import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// componente redux contenedor, o componente funcional, ya que va a menajar estados y comportamiento
import ProductList from './productList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

class ProductListContainer extends Component {
    //esto puede no estar, lo del contructor
    constructor(props){
        super(props)

        this.handleOnAddItem = this.handleOnAddItem.bind(this)
    }

    async componentWillMount(){
        await this.props.productActions.fetchProducts()
    }

    handleOnAddItem(item){
        this.props.cartActions.addCartItem(item)
    }

    render() {
        return (
            <div>
            <Grid>
                <Row>
                    <Col sm={8}>
                    <ProductList
                            loading={this.props.loading}
                            products={this.props.products}
                            onAddItem={this.handleOnAddItem}
                        />
                    </Col>
                    <Col sm={4}>
                    
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

ProductListContainer.defaultProps = {
    products : []
}

ProductListContainer.PropTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired,
    cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
}

//esta funcion es de react-redux, enlaza las propiedades que definamos aca dentro como propiedades del componenete, 
// y de esta forma accedemos al estado de estas, que las contiene redux y son globales de la aplicacion
function mapStateProps(state){
    return {
        products: state.productList.products,
        loading: state.productList.loading
    }
}

// esta funcion es de react-redux, enlaza nuestro products actiones como propiedades de nuestro componenete
function mapDispatchToProps(dispatch){
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchToProps) (ProductListContainer)
