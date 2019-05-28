import React, { Component } from 'react';
import Switch from 'react-switch';

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
    }
    render() {
        return (
            <div className={`addProduct ${this.props.addProductDisplay.addProductDisplay}`}>
                <h1>Create New</h1>
                <form onSubmit={this.addProduct}>
                    <div>
                        <div>
                            <div className='addProduct__header'>PRODUCT</div>
                            <input className='addProduct__input' type='text' name='name' placeholder='Item Name'></input>
                        </div>
                        <div>
                            <div className='addProduct__header'>LAST ORDERED</div>
                            <input className='addProduct__input' type='text' name='last_ordered' placeholder='yyyy-mm-dd'></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='addProduct__header'>CITY</div>
                            <input className='addProduct__input' type='text' name='city' placeholder='City'></input>
                        </div>
                        <div>
                            <div className='addProduct__header'>COUNTRY</div>
                            <select className='addProduct__input addProduct__input--select' name='country'>
                                <option value='Canada'>Canada</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='addProduct__header'>QUANTITY</div>
                            <input className='addProduct__input' type='text' name='quantity' placeholder='0'></input>
                        </div>
                        <div>
                            <div className='addProduct__header'>STATUS</div>
                            <div className='addProduct__statusToggle'>
                                <div className='addProduct__statusToggle--title'>In Stock</div>
                                <Switch className='addProduct__statusToggle--switch' onChange={this.handleChange} checked={this.state.checked} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='addProduct__header'>ITEM DESCRIPTION</div>
                        <textarea className='addProduct__input addProduct__input--description' placeholder='(Optional)'></textarea>
                    </div>
                    <div className='addProduct__buttons'>
                        <button className='addProduct__buttons--save'>SAVE</button>
                        <button onClick={this.props.hideAddProductPage} className='addProduct__buttons--cancel'>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }
}