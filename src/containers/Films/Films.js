import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./index.module.css";

import Film from "../../components/Films/Film";

class Films extends Component {
  render() {
    const { films } = this.props;
    return (
      <div className={style.films}>
        {films.map(film => (
          <div key={film.Title} className={style.film}>
            <Film {...film} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ films }) => ({
  films,
});

export default connect(mapStateToProps)(Films);
