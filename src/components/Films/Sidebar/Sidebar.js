import React, { Component } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import style from "./index.module.css";

import {
  searchFilmsByTitle,
  searchFilmsByStars,
  addFilms,
} from "../../../redux/actionCreators";

import searchIcon from "../../../assets/search-icon.png";

class Sidebar extends Component {
  state = {
    value: "",
    searchByTitle: true,
    loading: false,
  };

  selectTypeSearch = e =>
    this.setState({ searchByTitle: JSON.parse(e.target.value) });

  searchFilmsByTitle = e => {
    const { byTitle } = this.props;
    const { value } = e.target;
    this.setState({ loading: true, value });
    setTimeout(() => {
      this.setState({ loading: false });
      byTitle(value);
    }, 300);
  };

  searchFilmsByStars = e => {
    const { byStars } = this.props;
    const { value } = e.target;
    this.setState({ loading: true, value });
    setTimeout(() => {
      this.setState({ loading: false });
      byStars(value);
    }, 300);
  };

  render() {
    const { films } = this.props;
    const { value, searchByTitle: searchType, loading } = this.state;
    return (
      <div className={style.sidebar}>
        {!films.length && (
          <p className={style.error}>
            Фильмы не добавлены, поиск не возможен (добавьте фильм(ы), на
            странице ADD FILMS)
          </p>
        )}
        <div className={style.radioWrapper}>
          <input
            onChange={this.selectTypeSearch}
            id="title"
            className={style.variant}
            name="searchType"
            value
            type="radio"
            defaultChecked
          />
          <label htmlFor="title" className={style.searchType}>
            Найти фильм по названию
          </label>
        </div>

        <div className={style.radioWrapper}>
          <input
            onChange={this.selectTypeSearch}
            id="stars"
            className={style.variant}
            name="searchType"
            value={false}
            type="radio"
          />
          <label htmlFor="stars" className={style.searchType}>
            Найти фильм по имени актера
          </label>
        </div>
        <div className={style.searchWrapper}>
          <div className={style.searchIcon}>
            {loading ? (
              <ClipLoader size={13} />
            ) : (
              <img alt="Иконка поиска" src={searchIcon} />
            )}
          </div>
          <input
            onChange={
              searchType ? this.searchFilmsByTitle : this.searchFilmsByStars
            }
            value={value}
            className={style.search}
            type="text"
            disabled={!films.length}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ films }) => ({ films });

const mapDispatchToProps = {
  byTitle: searchFilmsByTitle,
  byStars: searchFilmsByStars,
  addFilms,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
