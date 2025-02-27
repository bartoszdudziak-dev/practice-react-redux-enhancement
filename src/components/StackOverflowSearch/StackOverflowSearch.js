import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../modules/stackoverflow";

function StackOverflowSearch() {
  const [sortBy, setSortBy] = useState("creation_date");

  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.stackoverflow.fields);
  const error = useSelector((state) => state.stackoverflow.error);
  const results = useSelector((state) => state.stackoverflow.results);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(actions.setFieldAction(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getResultsAction(title));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>Something went wrong ({error})</p>}

      {results &&
        (results.length > 0 ? (
          <>
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="creation_date">Sort by date</option>
              <option value="score">Sort by score</option>
            </select>

            <ul>
              {results
                .slice()
                .sort((a, b) => b[sortBy] - a[sortBy])
                .map((result) => {
                  const date = new Date(result.creation_date * 1000);

                  return (
                    <li key={result.question_id} style={{ display: "grid" }}>
                      <div>
                        Thread:
                        <a href={result.link} target="_blank">
                          {result.title}
                        </a>
                      </div>
                      <div>Score {result.score}</div>
                      <div>Creation date: {date.toLocaleDateString()}</div>
                    </li>
                  );
                })}
            </ul>
          </>
        ) : (
          <p>Not found</p>
        ))}
    </>
  );
}

export default StackOverflowSearch;
