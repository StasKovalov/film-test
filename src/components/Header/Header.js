import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./index.module.css";

const Header = () => (
  <div className={style.header}>
    <NavLink
      exact
      activeClassName={style.activeLink}
      className={style.link}
      to="/"
    >
      FILMS
    </NavLink>

    <NavLink
      exact
      activeClassName={style.activeLink}
      className={style.link}
      to="/add-films"
    >
      ADD FILMS
    </NavLink>
  </div>
);

export default withRouter(Header);
