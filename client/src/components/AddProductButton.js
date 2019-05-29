import React, { Component } from "react";
import Add from "../assets/Icons/SVG/Icon-add.svg";
import AddProduct from "./AddProduct";

export default class AddProductButton extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        addProductDisplay: "addProduct--hide"
    };
    displayAddProductPage = () => {
        this.setState({
            addProductDisplay: "addProduct--show"
        })
    };
    hideAddProductPage = () => {
        this.setState({
            addProductDisplay: "addProduct--hide"
        })
    };
    render() {
        console.log(this.state)
        return (
            <>
                <button className="add" onClick={this.displayAddProductPage}>
                    <img className="add--img" src={Add} alt="Plus Sign" />
                </button>
                <AddProduct hideAddProductPage={this.hideAddProductPage} addProductDisplay={this.state} warehouseNames={this.props.warehouseNames} />
            </>
        )
    }
}

