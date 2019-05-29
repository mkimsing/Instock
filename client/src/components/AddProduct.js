import React, { Component } from 'react';
import Switch from 'react-switch';
import axios from 'axios';
import Select from 'react-select';

export default class AddProduct extends Component {
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
        if (this.state.checked === false) {
            var toggleStatus = "Out Of Stock"
        } else {
            var toggleStatus = "In Stock"
        }
        // axios.post("http://localhost:8080/inventory", {
        //     // random id
        //     id: Math.random().toString(36).substr(2, 9),
        //     item: {
        //         // input productId
        //         productId: event.target.product_id,
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
        //     status: toggleStatus,
        //     // warehouseID dependent upon warehouse name
        //     warehouseId: event.target.warehouse
        // })
        event.target.product_id.value = ''
        event.target.name.value = ''
        event.target.description.value = ''
        event.target.last_ordered.value = ''
        event.target.city.value = ''
        event.target.country.value = 'CA'
        event.target.quantity.value = ''
        // event.target.warehouse.value = warehouseDropdownList[0]
    }
    render() {
        console.log(this.props)
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
                                <input className='addProduct__input' type='number' name='last_ordered' placeholder='mm/dd/yyyy'></input>
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
                                <div className='addProduct__warehousesSelect'>
                                    <WarehousesDropdownList warehouseNames={this.props.warehouseNames} />
                                </div>
                            </div>
                            <div>
                                <div className='addProduct__header'>PRODUCT ID</div>
                                <input className='addProduct__input' type='text' name='product_id' placeholder='Product ID'></input>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>QUANTITY</div>
                                <input className='addProduct__input' type='number' name='quantity' placeholder='0'></input>
                            </div>
                            <div className='addProduct__status'>
                                <div className='addProduct__header'>STATUS</div>
                                <div className='addProduct__statusToggle'>
                                    <div className='addProduct__statusToggle--title'>In Stock</div>
                                    <Switch className='addProduct__statusToggle--switch' checkedIcon={false} uncheckedIcon={false} onChange={this.handleChange} checked={this.state.checked} />
                                </div>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>CATEGORIES</div>
                                <input className='addProduct__input' type='text' name='categories' placeholder='Comma Separated'></input>
                            </div>
                            <div>
                                <div className='addProduct__header'>ORDERED BY</div>
                                <input className='addProduct__input' type='text' name='ordered_by' placeholder='Ordered By:'></input>
                            </div>
                        </div>
                        <div>
                            <div className='addProduct__header'>ITEM DESCRIPTION</div>
                            <textarea className='addProduct__input addProduct__input--description' name='description' placeholder='(Optional)'></textarea>
                        </div>
                        <div className='addProduct__buttons'>
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--cancel'>CANCEL</button>
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--save' type='submit'>SAVE</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

function WarehousesDropdownList(props) {
    const warehouseDropdownArray = props.warehouseNames
    if (Object.keys(warehouseDropdownArray).length === 0) return <div>Loading...</div>
    const warehouseDropdownList = warehouseDropdownArray.map((warehouse) => {
        return { label: warehouse.name, value: warehouse.name }
    })
    return (
        // <div className='addProduct__warehousesSelect'>
        <Select options={warehouseDropdownList} />
        // {/* </div> */ }
    )
}

