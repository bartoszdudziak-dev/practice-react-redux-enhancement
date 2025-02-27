import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../modules/github";

function GithubRepoSearch() {
  const { username, query } = useSelector((state) => state.github.fields);
  const repos = useSelector((state) => state.github.repos);
  const error = useSelector((state) => state.github.error);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(actions.setFieldAction(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getReposAction(username));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>Something went wrong ({error})</p>}

      {repos &&
        (repos.length > 0 ? (
          <>
            <div>
              <label htmlFor="query">Repository Name</label>
              <input
                id="query"
                name="query"
                value={query}
                onChange={handleInputChange}
              />
            </div>

            <ul>
              {repos
                .filter((repo) => repo.name.includes(query))
                .map((repo) => (
                  <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
          </>
        ) : (
          <p>No repos found for that username</p>
        ))}
    </>
  );
}

export default GithubRepoSearch;
