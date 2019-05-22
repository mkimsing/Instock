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
        <Link to="/inventory">Inventory</Link>
        <Link to="/warehouses">Locations</Link>
      </nav>
    </div>
  );
}

export default NavBar;
