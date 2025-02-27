import React from "react";
import { Provider } from "react-redux";
import StackOverflowSearch from "./StackOverflowSearch";
import { store } from "../../modules/stackoverflow";

function StackOverflowSearchWithStore() {
  return (
    <Provider store={store}>
      <StackOverflowSearch />
    </Provider>
  );
}

export default StackOverflowSearchWithStore;
