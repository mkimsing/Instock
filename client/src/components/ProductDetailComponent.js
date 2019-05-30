import React, { Component } from "react";
import Switch from "react-switch";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";

export default function ProductDetail(props) {
  if (Object.keys(props.product).length === 0) return <div>Loading...</div>;
  return (
    <div className="product-detail-page--margin">
      <div className="header">
        <div className="header__back">
          <Link to="/inventory">
            <img src={BackArrow} />
          </Link>
          <h1>{props.product.item.name}</h1>
        </div>
        <div className="header__stock">{props.product.status}</div>
      </div>

      <div>
        <form className="form">
          <div className="form--flex form__description">
            ITEM DESCRIPTION
            <h4 className="form__textarea" id="textarea1">
              {props.product.item.description}
            </h4>
          </div>
          <aside>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                ORDERED BY
                <h4>{props.product.orderedBy}</h4>
              </div>
              <div className="form--flex">
                REFERENCE NUMBER
                <h4>{props.product.id}</h4>
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                LAST ORDERED
                <h4>2018-05-24</h4>
              </div>
              <div className="form--flex">
                LOCATION
                <h4>{props.product.location}</h4>
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex form__margin--right">
                QUANTITY
                <h4>{props.product.quantity}</h4>
              </div>
            </div>

            <div className="form--flex form__categories--margin">
              CATEGORIES
              <h4 className="form__textarea" id="textarea2">
                {props.product.categories}
              </h4>
            </div>
          </aside>
        </form>
      </div>
      <div className="buttons">
        {/* <Link to={`/${}`/edit`}> */}
        <button>EDIT</button>
      </div>
    </div>
  );
}
