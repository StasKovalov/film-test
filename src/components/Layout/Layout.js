import React from "react";
import style from "./index.module.css";

import Header from "../Header";

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Header />
    <main className={style.inner}>{children}</main>
  </div>
);

export default Layout;
