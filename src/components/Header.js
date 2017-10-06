import React, { Component } from 'react';

class Header extends Component {

    constructor(){
        super()
        
        this.state = {
            itemCurrentlyOnSale: 'A Hammer!',
            editSaleItem: false
        }
    }

    toggleEditSaleItem = () => {
        this.setState({editSaleItem: !this.state.editSaleItem})
        
    }

    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently On Sale: {this.state.itemCurrentlyOnSale}</p>
                <button onClick={this.toggleEditSaleItem}>
                    { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
                </button>
                <div>
                {this.state.editSaleItem ? <input type="text" placeholder={this.state.itemCurrentlyOnSale} /> : null}
                </div>
            </div>
        );
    }
}

export default Header;