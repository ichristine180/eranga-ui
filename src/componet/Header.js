import React from "react";
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutA } from "../redux/Public";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  const dispatch = useDispatch();
  const navigateTo = location.pathname.includes("admin") ? "/" : "admin";
  return (
    <div className="navigation">
      <div className="logo" onClick={() => navigate(navigateTo)}>
        E-ranga
      </div>
      <nav className="items">
        <ul className="item">
          {!publicDoc.isLoggedIn || !location.pathname.includes("admin") ? (
            <>
              <li>
                <Link className="nav-link" to="./Amatangazo">
                  Amatangazo
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="admin">
                  Admin
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="nav-link" to="admin/ldoc">
                  Lost Document
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="admin">
                  Found Document
                </Link>
              </li>
              <li onClick={() => dispatch(logoutA())}>
                <span className="nav-link" style={{ cursor: "pointer" }}>
                  Logout
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
