import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <div className="logo" onClick={() => navigate("/")}>
        E-RANGA
      </div>
      <nav className="items">
        <ul className="item">
          <li>
            <Link className="nav-link" to="ibyarangishijwe">
              Ibyarangishijwe
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./Amatangazo">
              Amatangazo
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./admin">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
