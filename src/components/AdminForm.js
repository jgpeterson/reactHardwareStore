import React, { Component } from 'react';

class AdminForm extends Component {
    constructor(){
        super();

        this.state = {
            newForm: {
                productName: '',
                price: '',
                description: ''
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        const newForm = {...this.state.newForm}
        newForm[event.target.name] = event.target.value
        this.setState({newForm: newForm})
    }
    render() {
        return (
            <form >
            <div>
              <input onChange={this.handleChange} name="productName" type="text" placeholder="Name" value={this.state.newForm.productName}/>
            </div>
            <div>
              <input onChange={this.handleChange} name="price" type="text" placeholder="Price" value={this.state.newForm.price}/>
            </div>
            <div>
              <input onChange={this.handleChange} name="description" type="text" placeholder="Description" value={this.state.newForm.description}/>
            </div>
            <div>
              <button>Create A Product</button>
            </div>
          </form>
            
        );
    }
}

export default AdminForm;