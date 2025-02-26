import { actions } from ".";

class GitHubAPI {
  url = "https://api.github.com";

  getRepos(userName) {
    // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    return (dispatch) => {
      return fetch(`${this.url}/users/${userName}/repos`)
        .then(this.handleErrors)
        .then((resp) => resp.json())
        .then((resp) => dispatch(actions.setReposAction(resp)))
        .catch((err) => dispatch(actions.setErrorAction(err.message)));
    };
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.status);
    }

    return resp;
  }
}

export default GitHubAPI;
