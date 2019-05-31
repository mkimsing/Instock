import React, { Component } from 'react';
import Switch from 'react-switch';
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
            productId,
            name,
            description,
            lastOrdered,
            orderedBy,
            city,
            country,
            quantity,
            warehouseId,
            categories
        } = event.target;
        let itemFields = [
            productId,
            name,
            lastOrdered,
            orderedBy,
            city,
            country,
            quantity,
            categories
        ]
        let itemAllFilled = itemFields
            .map(field => {
                return helper.isEmpty(field)
            })
            .every(val => {
                return val === false;
            });
        if (itemAllFilled) {
            const itemObj = {
                productId: productId.value.trim(),
                name: name.value.trim(),
                description: description.value.trim()
            }
            const itemLocationObj = {
                city: city.value.trim(),
                country: country.value.trim(),
            }
            const itemCategoriesArr = categories.value.split(',').map(category => {
                return category.trim();
            });
            this.props.postNewItem(
                itemObj,
                itemLocationObj,
                itemCategoriesArr,
                lastOrdered.value.trim(),
                orderedBy.value.trim(),
                quantity.value.trim(),
                toggleStatus,
                warehouseId.value
            )
            productId.value = ''
            name.value = ''
            description.value = ''
            lastOrdered.value = ''
            city.value = ''
            country.value = ''
            quantity.value = ''
            warehouseId.value = ''
            orderedBy.value = ''
            categories.value = ''
            this.props.hideAddProductPage()
        } else {
            alert('Please fill out all the fields!')
        }
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
                                <input className='addProduct__input' type='text' name='lastOrdered' placeholder='mm/dd/yyyy'></input>
                            </div>
                        </div>
                        <div className='addProduct__tab--row'>
                            <div>
                                <div className='addProduct__header'>CITY</div>
                                <input className='addProduct__input' type='text' name='city' placeholder='City'></input>
                            </div>
                            <div>
                                <div className='addProduct__header'>COUNTRY</div>
                                <select className='addProduct__input addProduct__input--select' name='country' defaultValue=''>
                                    <option value='' disabled hidden>Select...</option>
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
                                <input className='addProduct__input' type='text' name='productId' placeholder='Product ID'></input>
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
                                <input className='addProduct__input' type='text' name='orderedBy' placeholder='Name Here'></input>
                            </div>
                        </div>
                        <div>
                            <div className='addProduct__header'>ITEM DESCRIPTION</div>
                            <textarea className='addProduct__input addProduct__input--description' name='description' placeholder='(Optional)'></textarea>
                        </div>
                        <div className='addProduct__buttons'>
                            <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--cancel' type='button'>CANCEL</button>
                            <button className='addProduct__buttons--save' type='submit'>SAVE</button>
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
        <Select name='warehouseId' placeholder='Select...' options={warehouseDropdownList} />
    )
}
