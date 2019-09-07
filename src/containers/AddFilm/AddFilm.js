import React, { Component } from "react";
import style from "./index.module.css";

import ByForm from "../../components/AddFilm/ByForm";

class AddFilm extends Component {
  render() {
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
              <input className={style.uploadFile} type="file" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFilm;
