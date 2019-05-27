import React, { Component } from "react";
import Switch from "react-switch";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";

export default function ProductDetail() {
  return (
    <div className="product-detail-page--margin">
      <div className="header">
        <div className="header__back">
          <img src={BackArrow} />
          <h1>Product Name</h1>
        </div>
        <div className="header__stock">In Stock</div>
      </div>

      <div>
        <form className="form">
          <div className="form--flex form__description">
            ITEM DESCRIPTION
            <h4 className="form__textarea" id="textarea1">
              Here is a more detailed summary of the product name, it’s uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
          </div>
          <aside>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                ORDERED BY
                <h4>Mark Saunders</h4>
              </div>
              <div className="form--flex">
                REFERENCE NUMBER
                <h4>JK2020FD7811201</h4>
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                LAST ORDERED
                <h4>2018-05-24</h4>
              </div>
              <div className="form--flex">
                LOCATION
                <h4>Toronto, CA</h4>
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                QUANTITY
                <h4>0</h4>
              </div>
            </div>

            <div className="form--flex form__categories--margin">
              CATEGORIES
              <h4 className="form__textarea" id="textarea2">
                Industrial, Automotive, Heavy, Mechanical, Engineering,
                Transportation, Sales
              </h4>
            </div>
          </aside>
        </form>
      </div>
      <div className="buttons">
        <button>EDIT</button>
      </div>
    </div>
  );
}
