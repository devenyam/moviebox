import React from 'react';

export default function MoviePoster({ movie }) {
  return (
    <div className="movie-poster">
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}
