import React, { Component } from "react";
import Add from "../assets/Icons/SVG/Icon-add.svg";
import AddProduct from "./AddProduct";

export default class AddProductButton extends Component {
    state = {
        addProductDisplay: "addProduct--hide",
        inventoryPageScroll: "inventory--scroll"
    };
    displayAddProductPage = () => {
        this.setState({
            addProductDisplay: "addProduct--show",
            inventoryPageScroll: "inventory--noScroll"
        })
    };
    hideAddProductPage = () => {
        this.setState({
            addProductDisplay: "addProduct--hide",
            inventoryPageScroll: "inventory--scroll"
        })
    };
    render() {
        return (
            <>
                <button className="add" onClick={this.displayAddProductPage}>
                    <img className="add--img" src={Add} alt="Plus Sign" />
                </button>
                <AddProduct hideAddProductPage={this.hideAddProductPage} addProductDisplay={this.state} />
            </>
        )
    }
}

