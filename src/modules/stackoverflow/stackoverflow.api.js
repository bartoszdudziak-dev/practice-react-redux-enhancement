import { actions } from ".";

class StackOverflowAPI {
  url = "https://api.stackexchange.com/2.3/similar?site=stackoverflow";

  getResults(title) {
    return (dispatch) => {
      return fetch(`${this.url}&title=${title}`)
        .then(this.handleErrors)
        .then((resp) => resp.json())
        .then((resp) => dispatch(actions.setResultsAction(resp.items)))
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

export default StackOverflowAPI;
