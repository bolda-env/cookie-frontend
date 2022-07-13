import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navigate">
      <ul>
        <li>
          <Link to="#">
            <i className="bi bi-cursor-fill"></i>
            <div className="nav-name">meeting</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="bi bi-bell-fill"></i>
            <div className="nav-name">notification</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="bi bi-gear-fill"></i>
            <div className="nav-name">setting</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
