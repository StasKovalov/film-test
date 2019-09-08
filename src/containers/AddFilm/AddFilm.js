import React, { Component } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import style from "./index.module.css";

import { addFilms } from "../../redux/actionCreators";

import ByForm from "../../components/AddFilm/ByForm";

class AddFilm extends Component {
  state = {
    loadError: false,
    loading: false,
  };

  convertToObjects = text => {
    const strText = text;
    const arr = strText.split("\n");
    const arraySize = 4;
    const slicedArray = [];

    const filterArray = arr.filter(item => !!item);
    const arrAllObjField = filterArray.map(item => {
      const entries = item.split(":");
      return {
        [entries[0].trim()]: entries[1].trim(),
      };
    });

    for (let i = 0; i < arrAllObjField.length; i += arraySize) {
      slicedArray.push(arrAllObjField.slice(i, i + arraySize));
    }

    const finish = slicedArray.map(arr =>
      arr.reduce((ac, cur) => ({ ...ac, ...cur }), {})
    );
    return finish;
  };

  readFile = async e => {
    if (e.target.files[0] && e.target.files[0].type === "text/plain") {
      this.setState({ loading: true });
      const file = e.target.files[0];
      const { addFilms, history } = this.props;
      const reader = new FileReader();
      reader.readAsText(file);

      const resultPromise = await new Promise((resolve, reject) => {
        reader.onload = () => {
          const { result } = reader;
          resolve(this.convertToObjects(result));
        };
        reader.onerror = () => {
          reject(reader.error);
          this.setState({ loadError: true });
        };
      });
      addFilms(resultPromise);
      localStorage.setItem("films", JSON.stringify(resultPromise));
      setTimeout(() => {
        this.setState({ loading: false });
        history.push("/");
      }, 400);
    } else {
      this.setState({ loadError: true });
    }
  };

  render() {
    const { loading, loadError } = this.state;
    return (
      <div className={style.addFilm}>
        <div className={style.titleWrapper}>
          <h1 className={style.textHead}>
            Загрузите фильмы удобным для Вас способом:{" "}
          </h1>
          <ul className={style.list}>
            <li className={style.variant}>Через форму</li>
            <li className={style.variant}>Через .txt файл</li>
          </ul>
        </div>
        <div className={style.uploadFilms}>
          <div className={style.byForm}>
            <ByForm />
          </div>
          <div className={style.byInput}>
            <h1 className={style.title}>
              Вы можете загрузить фильмы выбрав файл формата .txt
            </h1>
            <div className={style.inputPosition}>
              <input
                className={style.uploadFile}
                onChange={this.readFile}
                accept=".txt"
                type="file"
              />
              {loading ? <ClipLoader size={30} color="#949292" /> : false}
            </div>
            {loadError ? (
              <p className={style.error}>
                Произошла ошибка, возможно вы выбрали файл другого типа,
                пожалуйста, выберите файл типа .txt
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { addFilms };

export default connect(
  null,
  mapDispatchToProps
)(AddFilm);
