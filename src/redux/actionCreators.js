import {
  ADD_FILM,
  DELETE_FILM,
  ADD_FILMS,
  SEARCH_FILMS_BY_TITLE,
  SEARCH_FILMS_BY_STARS,
} from "./constans";

export const addFilms = films => ({
  type: ADD_FILMS,
  payload: films,
});

export const addFilm = film => ({
  type: ADD_FILM,
  payload: film,
});

export const deleteFilm = title => ({
  type: DELETE_FILM,
  payload: title,
});

export const searchFilmsByTitle = title => ({
  type: SEARCH_FILMS_BY_TITLE,
  payload: title,
});

export const searchFilmsByStars = stars => ({
  type: SEARCH_FILMS_BY_STARS,
  payload: stars,
});
