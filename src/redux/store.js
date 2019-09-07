import { createStore } from "redux";
import filmReducer from "./filmsReducer";

const store = createStore(filmReducer);

export default store;
