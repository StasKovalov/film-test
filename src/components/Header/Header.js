import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "./index.module.css";

const Header = () => (
  <div className={style.header}>
    <NavLink
      exact
      activeClassName={style.activeLink}
      className={style.link}
      to={{
        pathname: "/",
        state: { updatePost: false },
      }}
    >
      FILMS
    </NavLink>

    <NavLink
      exact
      activeClassName={style.activeLink}
      className={style.link}
      to={{
        pathname: "/add-films",
        state: { updatePost: false },
      }}
    >
      ADD FILMS
    </NavLink>
  </div>
);

export default withRouter(Header);
