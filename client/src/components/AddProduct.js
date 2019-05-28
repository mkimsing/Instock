import React, { Component } from 'react';
import Switch from 'react-switch';
import axios from 'axios';

export default class AddProduct extends Component {
    // give toggle switch functionality
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(checked) {
        this.setState({ checked });
    }

    addProduct = (event) => {
        event.preventDefault()
        // axios.post("http://localhost:8080/inventory", {
        //     // random id?
        //     id: random,
        //     item: {
        //         // need productId
        //         productId: event.target.productId,
        //         name: event.target.name,
        //         description: event.target.description
        //     },
        //     lastOrdered: event.target.last_ordered,
        //     location: {
        //         city: event.target.city,
        //         country: event.target.country
        //     },
        //     quantity: event.target.quantity,
        //     // need toggle.switch functionality
        //     status: toggle.switch
        //     // warehouseID dependent upon warehouse name

        // })
    }
    // do we need to add productId?
    render() {
        return (
            <div className={`addProduct ${this.props.addProductDisplay.addProductDisplay}`}>
                <div className='addProduct__tab'>
                    <h1 className='addProduct__title'>Create New</h1>
                    <form onSubmit={this.addProduct}>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>PRODUCT</div>
                                <input className='addProduct__input' type='text' name='name' placeholder='Item Name'></input>
                            </div>
                            <div>
                                <div className='addProduct__header'>LAST ORDERED</div>
                                <input className='addProduct__input' type='text' name='last_ordered' placeholder='yyyy-mm-dd'></input>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>CITY</div>
                                <input className='addProduct__input' type='text' name='city' placeholder='City'></input>
                            </div>
                            <div>
                                <div className='addProduct__header'>COUNTRY</div>
                                <select className='addProduct__input addProduct__input--select' name='country'>
                                    <option value='CA'>CA</option>
                                </select>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>WAREHOUSE</div>
                                <select className='addProduct__input addProduct__input--select' name='warehouse'>
                                    <option value='Warehouse 1'>Warehouse 1</option>
                                </select>
                            </div>
                            <div>
                                <div className='addProduct__header'>PRODUCT ID</div>
                                <input className='addProduct__input' type='text' name='product_id' placeholder='Product ID'></input>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>QUANTITY</div>
                                <input className='addProduct__input' type='text' name='quantity' placeholder='0'></input>
                            </div>
                            <div className='addProduct__status'>
                                <div className='addProduct__header'>STATUS</div>
                                <div className='addProduct__statusToggle'>
                                    <div className='addProduct__statusToggle--title'>In Stock</div>
                                    <Switch className='addProduct__statusToggle--switch' onChange={this.handleChange} checked={this.state.checked} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='addProduct__header'>ITEM DESCRIPTION</div>
                            <textarea className='addProduct__input addProduct__input--description' name='description' placeholder='(Optional)'></textarea>
                        </div>
                        <div className='addProduct__buttons'>
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--cancel'>CANCEL</button>
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--save'>SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}