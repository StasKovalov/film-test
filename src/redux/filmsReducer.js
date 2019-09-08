import {
  ADD_FILM,
  DELETE_FILM,
  ADD_FILMS,
  SEARCH_FILMS_BY_TITLE,
  SEARCH_FILMS_BY_STARS,
} from "./constans";

const initialState = {
  films: [],
  searchFilms: [],
};

const searchFilm = (state, payload, searchBy) => {
  const { films } = state;
  const allFilms = [...films];
  const searchFilms = allFilms.filter(film =>
    film[searchBy].toLowerCase().includes(payload.toLowerCase().trim())
  );

  return {
    ...state,
    searchFilms,
  };
};

const filmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILMS:
      return {
        films: [...payload, ...state.films],
        searchFilms: [...payload, ...state.films],
      };

    case ADD_FILM:
      return {
        films: [payload, ...state.films],
        searchFilms: [payload, ...state.films],
      };

    case DELETE_FILM:
      const filtredFilms = state.films.filter( film => film.Title !== payload);

      return {
        films: filtredFilms,
        searchFilms: filtredFilms,
      };

    case SEARCH_FILMS_BY_TITLE:
      return searchFilm(state, payload, "Title");

    case SEARCH_FILMS_BY_STARS:
      return searchFilm(state, payload, "Stars");

    default:
      return state;
  }
};

export default filmsReducer;
