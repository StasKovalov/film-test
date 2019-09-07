import { ADD_FILM, DELETE_FILM, ADD_FILMS } from "./constans";

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
