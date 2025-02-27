import StackOverflowAPI from "./stackoverflow.api";
import types from "./stackoverflow.types";

const API = new StackOverflowAPI();
const getResultsAction = (title) => API.getResults(title);

const setFieldAction = (name, value) => {
  return {
    type: types.SET_FIELD,
    payload: {
      name,
      value,
    },
  };
};

const setResultsAction = (results) => {
  return { type: types.SET_RESULTS, payload: { results } };
};

const setErrorAction = (error) => {
  return { type: types.SET_ERROR, payload: { error } };
};

export default {
  getResultsAction,
  setResultsAction,
  setFieldAction,
  setErrorAction,
};
