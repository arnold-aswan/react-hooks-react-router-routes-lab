import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((film, index) => {
    return (
      <div key={index}>
        <h3>Name: {film.title}</h3>
        <p>Time: {film.time}</p>
        <p>Genres: </p>
        <ul>
          {film.genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  );
}

export default Movies;
