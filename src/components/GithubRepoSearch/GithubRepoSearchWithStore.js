import React from "react";
import { Provider } from "react-redux"
import { store } from "../../modules/github"
import GithubRepoSearch from "./GithubRepoSearch"

function GithubRepoSearchWithStore() {
    return (
        <Provider store={store}>
            <GithubRepoSearch />
        </Provider>
    )
}

export default GithubRepoSearchWithStore
