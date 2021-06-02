import React, { useState } from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-icon" onClick={() => setClick(!click)}>
          {click ? (
            <CloseIcon style={{ fontSize: 45 }} />
          ) : (
            <MenuIcon style={{ fontSize: 45 }} />
          )}
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          {NavbarItems.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.link}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
