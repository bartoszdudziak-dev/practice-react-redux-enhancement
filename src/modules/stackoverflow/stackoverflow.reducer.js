import types from "./stackoverflow.types";

const initState = {
  fields: {
    title: "",
  },
  results: null,
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_FIELD:
      const { name, value } = action.payload;
      return { ...state, fields: { ...state.fields, [name]: value } };

    case types.SET_RESULTS: {
      const { results } = action.payload;
      return { ...state, results, error: null };
    }

    case types.SET_ERROR:
      const { error } = action.payload;
      return { ...state, error, results: null };

    default:
      return state;
  }
};

export default reducer;
