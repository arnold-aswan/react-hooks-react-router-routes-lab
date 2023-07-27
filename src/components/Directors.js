import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((director, index) => {
    return (
      <div key={index}>
        <h3>Name: {director.name}</h3>
        <p>Movies: </p>
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
