import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'
import Product from './Product'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true
    }
  }

  render () {
    return (
      <div className="shop">
        <div className="products">
          {this.state.isAdmin ? <AdminView /> : <ShopView />}
        </div>
        <CartView />
      </div>
    )
  }
}

export default Shop