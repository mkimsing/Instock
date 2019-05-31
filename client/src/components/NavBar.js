import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logo-instock.svg";

function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <Link to="/">
          <img className="logo" src={logo} alt="Instock logo" />
        </Link>
      </header>
      <nav>
        <div className="nav__left">
        <Link to="/inventory">Inventory</Link>
        </div>
        <div className="nav__right">
        <Link to="/warehouses">Locations</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
