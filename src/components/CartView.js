import React, { Component } from 'react';

class CartView extends Component {


    addProductToCartList = (newProduct) => {
        const newCartList = [...this.state.CartList]
        newCartList.splice
        this.setState({CartList: newCartList})
      }
    
      deleteProductFromCartList = (id) => {
          const newCartList = [...this.state.CartList]
          this.setState({cartList: newCartList})
      }

    render() {
        return (
            <div>
               Cart View 
            </div>
        );
    }
}

export default CartView;