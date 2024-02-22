import React from 'react';

export default function MovieDetails({ children, isLoading, movieEl }) {
  return (
    <div className="movie-details" ref={movieEl}>
      {isLoading ? 'Loading...' : <>{children}</>}
    </div>
  );
}
