import { ADD_FILM, DELETE_FILM, ADD_FILMS } from "./constans";

const initialState = {
  films: [],
};

const filmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILMS:
      return {
        films: [...payload, ...state.films],
      };

    case ADD_FILM:
      return {
        films: [payload, ...state.films],
      };

    case DELETE_FILM:
      const filtredFilms = state.films.filter(film => film.Titel !== payload);
      return {
        films: filtredFilms,
      };

    default:
      return state;
  }
};

export default filmsReducer;
