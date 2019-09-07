import React, { Component } from "react";
import style from "./index.module.css";

class ByForm extends Component {
  state = {
    filmForm: {
      title: "",
      release: "",
      format: "",
      stars: "",
    },
    isValid: false,
  };

  checkValidForm = (e, key) => {
    const filmForm = { ...this.state.postForm };
    let filmFormEl = { ...filmForm[key] };
    filmFormEl = e.target.value;
    filmForm[key] = filmFormEl;

    const valueArr = Object.values(filmForm);
    let isValid = true;
    valueArr.forEach(value => (isValid = !!value.trim() && isValid));
    this.setState({ filmForm, isValid });
  };

  render() {
    const { filmForm, isValid } = this.state;
    return (
      <div className={style.ByForm}>
        <label className={style.category} htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={filmForm.title}
          className={style.title}
          onChange={event => this.checkValidForm(event, "title")}
        />

        <label className={style.category} htmlFor="release">
          Release
        </label>
        <input
          id="release"
          type="text"
          className={style.release}
          value={filmForm.release}
          onChange={event => this.checkValidForm(event, "release")}
        />

        <label className={style.category} htmlFor="format">
          Format
        </label>
        <input
          id="format"
          type="text"
          value={filmForm.format}
          className={style.format}
          onChange={event => this.checkValidForm(event, "format")}
        />

        <label className={style.category} htmlFor="stars">
          Stars
        </label>
        <input
          id="stars"
          type="text"
          value={filmForm.stars}
          className={style.stars}
          onChange={event => this.checkValidForm(event, "stars")}
        />

        <button className={style.addButton} disabled={!isValid} type="button">
          ADD FILM
        </button>
      </div>
    );
  }
}

export default ByForm;
