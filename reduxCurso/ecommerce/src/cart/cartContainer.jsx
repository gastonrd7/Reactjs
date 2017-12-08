import React, {Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartActions from '../actions/cartActions'
import CartItemList from './cartItemList'

class CartContainer extends Component {
    constructor(props){
        super(props)

        this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this)
    }

    componentWillMount(){
        this.props.cartActions.loadCartItems()
    }

    handleOnRemoveItem(itemId){
        this.props.cartActions.removeCartItem(itemId)
    }
    
    render() {
        return (
            <section className="container">
                <CartItemList 
                    items={this.props.items}
                    onRemoveItem={this.handleOnRemoveItem}
                />
                <hr/>
                <div className="row">
                <p>Total: <strong>{this.props.total} &euro;</strong></p>
                </div>
            </section>
        )
    }
}

CartContainer.defaultProps = {
    items: [],
    total: 0
}

CartContainer.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    price: PropTypes.number
}

function mapStateProps(state){
    return {
        items: state.cart.items,
        total: state.cart.total
    }
}

function mapDispatchToProps(dispatch){
    return {
        cartActions: bindActionCreators(cartActions, dispatch)

    }
}

export default connect(mapStateProps, mapDispatchToProps) (CartContainer)