import types from "./github.types";

const initState = {
  fields: {
    username: "",
    query: "",
  },
  error: null,
  repos: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_FIELD:
      const { name, value } = action.payload;
      return { ...state, fields: { ...state.fields, [name]: value } };

    case types.SET_REPOS:
      const { repos } = action.payload;
      return { ...state, repos, error: null };

    case types.SET_ERROR:
      const { error } = action.payload;
      return { ...state, error, repos: null };

    default:
      return state;
  }
};

export default reducer;
