import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutA } from "../redux/Public";
const Header = () => {
  const navigate = useNavigate();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  const dispatch = useDispatch();
  return (
    <div className="navigation">
      <div className="logo" onClick={() => navigate("/")}>
        E-RANGA
      </div>
      <nav className="items">
        <ul className="item">
          {/* <li>
            <Link className="nav-link" to="ibyarangishijwe">
              Ibyarangishijwe
            </Link>
          </li> */}
          {!publicDoc.isLoggedIn ? (
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
                  Amatangazo
                </Link>
              </li>
              <li onClick={() => dispatch(logoutA())}>
                <span className="nav-link">Logout</span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
