import React, { Component } from 'react';
import Switch from 'react-switch';
import axios from 'axios';
import Select from 'react-select';
import helper from "../helpers/helper";

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
        let {
            // item,
            product_id,
            name,
            description,
            last_ordered,
            ordered_by,
            // location,
            city,
            country,
            quantity,
            warehouse_id,
            categories
        } = event.target;
        let fields = [
            // item,
            product_id,
            name,
            last_ordered,
            ordered_by,
            // location,
            city,
            country,
            quantity,
            // having warehouse_id as a required field breaks the helper
            // warehouse_id,
            categories
        ]
        let allFilled = fields
            .map(field => {
                return helper.isEmpty(field)
            })
            .every(val => {
                return val === false;
            });
        if (allFilled) {
            console.log('all are filled')
            const itemObj = {
                product_id: product_id.value,
                name: name.value,
                description: description.value
            }
            const locationObj = {
                city: city.value,
                country: country.value,
            }
            // sample console log below
            console.log(itemObj, locationObj, last_ordered.value, warehouse_id.value)
        } else {
            console.log('one or more fields missing')
        }
        product_id.value = ''
        name.value = ''
        description.value = ''
        last_ordered.value = ''
        city.value = ''
        country.value = 'CA'
        quantity.value = ''
        warehouse_id.value = ''
        ordered_by.value = ''
        categories.value = ''
    }
    render() {
        if (this.state.checked === false) {
            var toggleLabel = "Out Of Stock"
        } else {
            var toggleLabel = "In Stock"
        }
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
                                <input className='addProduct__input' type='text' name='last_ordered' placeholder='mm/dd/yyyy'></input>
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
                                    <div className='addProduct__statusToggle--title'>{toggleLabel}</div>
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
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--cancel' type='button'>CANCEL</button>
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
        return { label: warehouse.name, value: warehouse.id }
    })
    return (
        <Select name='warehouse_id' placeholder='Select...' options={warehouseDropdownList} />
    )
}
