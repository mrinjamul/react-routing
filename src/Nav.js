import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const NavStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav>
        <Link to="/" style={NavStyle}>
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/about" style={NavStyle}>
            <li>About</li>
          </Link>
          <Link to="/shop" style={NavStyle}>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
