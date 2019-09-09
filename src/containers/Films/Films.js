import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilms } from "../../redux/actionCreators";
import style from "./index.module.css";

import Sidebar from "../../components/Films/Sidebar";
import Film from "../../components/Films/Film";

class Films extends Component {
  componentDidMount = () => {
    this.getFilms();
  };

  componentDidUpdate = nextProps => {
    const { films } = nextProps;
    const filmsJson = JSON.stringify(films);
    localStorage.setItem("films", filmsJson);
    return true;
  };

  getFilms = () => {
    const { addFilms, films } = this.props;
    const filmsJson = localStorage.getItem("films");
    if (filmsJson && !films.length) {
      const films = JSON.parse(filmsJson);
      addFilms(films);
    }
  };

  render() {
    const { searchFilms } = this.props;
    return (
      <div className={style.flex}>
        <div className={style.sidebarWrapper}>
          <Sidebar />
        </div>

        <div className={style.films}>
          {searchFilms.length ? (
            searchFilms.map((film, indx) => (
              <div key={`${film.Title}${indx}`} className={style.film}>
                <Film {...film} />
              </div>
            ))
          ) : (
            <h1 className={style.notFound}>Ничего не найдено</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchFilms, films }) => ({
  searchFilms,
  films,
});

const mapDispatchToProps = {
  addFilms,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
