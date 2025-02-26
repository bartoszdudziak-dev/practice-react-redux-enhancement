import GitHubAPI from "./github.api";
import types from "./github.types";

const API = new GitHubAPI();
const getReposAction = (username) => API.getRepos(username);

const setFieldAction = (name, value) => {
  return {
    type: types.SET_FIELD,
    payload: {
      name,
      value,
    },
  };
};

const setReposAction = (repos) => {
  return { type: types.SET_REPOS, payload: { repos } };
};

const setErrorAction = (error) => {
  return { type: types.SET_ERROR, payload: { error } };
};

export default {
  setFieldAction,
  setReposAction,
  setErrorAction,
  getReposAction,
};
