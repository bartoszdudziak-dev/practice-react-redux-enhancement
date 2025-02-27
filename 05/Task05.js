import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { reducer as githubReducer } from "../src/modules/github";
import { reducer as stackoverflowReducer } from "../src/modules/stackoverflow";

import GithubRepoSearch from "../src/components/GithubRepoSearch/GithubRepoSearch";
import StackOverflowSearch from "../src/components/StackOverflowSearch/StackOverflowSearch";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const Task05 = () => {
  return (
    <Provider store={store}>
      <section>
        <h2>Task 05</h2>
        <div>
          <h3>Github API</h3>
          <GithubRepoSearch />
        </div>

        <div>
          <h3>StackOverflow API</h3>
          <StackOverflowSearch />
        </div>
      </section>
    </Provider>
  );
};

export default Task05;
