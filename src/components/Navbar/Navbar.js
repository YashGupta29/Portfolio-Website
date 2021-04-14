import React from "react";
import "./Navbar.css";
import { MenuList } from "../data/MenuList";
import { NavLink } from "react-router-dom";

const Navbar = ({ changeTheme }) => {
  const menuList = MenuList.map(({ url, title, theme }, index) => {
    return (
      <li key={index}>
        <NavLink
          exact
          to={url}
          activeClassName="active"
          onClick={() => changeTheme(theme)}
        >
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className="logo"
        onClick={() => changeTheme("#1414be")}
      >
        Portfolio.
      </NavLink>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;
