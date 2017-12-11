import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductDetail from './productDetail'
import * as cartActiones from '../actions/cartActions'
import * as productActions from '../actions/productActions'

class ProductDetailContainer extends Component{
    constructor(props){
        super(props)

        this.handleOnAddItem = this.handleOnAddItem.bind(this)
    }

    async componentWillMount(){
        await this.props.productActions.fetchProduct(this.props.productId)
    }

    handleOnAddItem(item){
        this.props.cartActiones.addCartItem(item)
    }

    render(){
        return(
            <ProductDetail
            loading={this.props.loading}
            product={this.props.product}
            onAddItem={this.handleOnAddItem}
        />
        )
    }
}

ProductDetailContainer.PropTypes = {
    productId: PropTypes.string.isRequired,
    product: PropTypes.object,
    loading: PropTypes.bool.isrequired,
    cartActiones: PropTypes.objectOf(PropTypes.func).isrequired,
    productActions: PropTypes.objectOf(PropTypes.func).isrequired,
    onAddItem: PropTypes.func.isrequired
}
//ownProps va a ser las propiedades propias del componente, la vamos a usar para sacar el id de la url
function mapStateProps(state, ownProps){
    return {
        productId: ownProps.params.productId,
        product: state.activeProduct.product,
        loading: state.activeProduct.loading
    }
}

function mapDispatchToProps(dispatch){
    return {
        cartActiones: bindActionCreators(cartActiones, dispatch),
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchToProps)(ProductDetailContainer)