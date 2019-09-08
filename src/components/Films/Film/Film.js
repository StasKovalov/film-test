import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./index.module.css";

import { deleteFilm } from "../../../redux/actionCreators";

class Film extends Component {
  deleteFilm = e => {
    const {
      target: {
        dataset: { title },
      },
    } = e;
    const { deleteFilm } = this.props;
    deleteFilm(title);
  };

  render() {
    const { Title, "Release Year": realeseYear, Format, Stars } = this.props;
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

        <button
          data-title={Title}
          onClick={this.deleteFilm}
          type="button"
          className={style.deleteFilm}
        >
          DELETE FILM
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteFilm,
};

export default connect(
  null,
  mapDispatchToProps
)(Film);
