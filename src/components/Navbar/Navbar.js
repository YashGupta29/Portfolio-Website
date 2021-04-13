import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <NavLink exact to="/" className="logo">
        Port<span>folio.</span>
      </NavLink>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;
