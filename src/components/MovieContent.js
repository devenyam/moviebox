import React from 'react';

export default function MovieContent({ movie }) {
  return (
    <div className="movie-content">
      <p className="movie-title">Title: {movie.Title}</p>
      <span className="movie-plot">
        <p>Plot:</p>
        <p>{movie.Plot}</p>
      </span>
      <p className="movie-releasedDate">Released Date: {movie.Released}</p>
      <p className="movie-rating">IMDB Rating: {movie.imdbRating}</p>
      <p className="movie-rated">Rated: {movie.Rated}</p>
      <p className="movie-actors">Actors: {movie.Actors}</p>
    </div>
  );
}
