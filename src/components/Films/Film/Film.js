import React, { Component } from "react";
import style from "./index.module.css";

class Film extends Component {
  render() {
    const { Title, "Release Year": realeseYear, Format, Stars } = this.props;
    console.log(this.props);
    return (
      <div className={style.film}>
        <div className={style.item}>
          <p className={style.category}>Title:</p>
          <p className={style.info}>{Title}</p>
        </div>

        <div className={style.item}>
          <p className={style.category}>Realese Year:</p>
          <p className={style.info}>{realeseYear}</p>
        </div>

        <div className={style.item}>
          <p className={style.category}>Format:</p>
          <p className={style.info}>{Format}</p>
        </div>

        <div className={style.item}>
          <p className={style.category}>Stars:</p>
          <p className={style.info}>{Stars}</p>
        </div>

        <button type="button" className={style.deleteFilm}>
          DELETE FILM
        </button>
      </div>
    );
  }
}

export default Film;
