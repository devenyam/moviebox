import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import MovieBox from './components/MovieBox';
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';
import MovieContent from './components/MovieContent';
import MoviePoster from './components/MoviePoster';

const tempMovies = [
  'The Equalizer',
  'Fast X',
  'One Piece',
  'Attack On Titan',
  'The Transporter',
  'Thor',
  'Rush Hour',
  'Hidden Strike',
  'The Beekeeper',
];

const randomIndex = Math.trunc(Math.random() * tempMovies.length);

function App() {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const movieEl = useRef(null);
  const tempMovie = tempMovies[randomIndex];

  function handleMovieSearch(e) {
    setMovieSearch(e.target.value);
  }

  async function handleMovieRequest() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=b467b945&t=${movieSearch}`
      );

      if (!res.ok) {
        throw new Error('Invalid API KEY 🚩');
      }

      const data = await res.json();

      if (data.Response === 'False') {
        throw new Error('Movie not found ☹️');
      }

      setLoading(false);
      setMovie(data);
    } catch (error) {
      movieEl.current.textContent = `${error.message}`;
    }
  }

  useEffect(
    function () {
      async function fetchMovies() {
        setLoading(true);
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=b467b945&t=${tempMovie}`
          );

          if (!res.ok) {
            throw new Error('Invalid API KEY 🚩');
          }

          const data = await res.json();

          if (data.Response === 'False') {
            throw new Error('Movie not found ☹️');
          }

          setLoading(false);
          setMovie(data);
        } catch (error) {
          movieEl.current.textContent = `${error.message}`;
        }
      }

      fetchMovies();
    },
    [tempMovie]
  );

  return (
    <div className="app">
      <Header title="Moviebox" />
      <Search
        movieSearch={movieSearch}
        onSetSearch={handleMovieSearch}
        onSearch={handleMovieRequest}
      />
      <MovieBox>
        <MovieDetails isLoading={isLoading} movieEl={movieEl}>
          <MoviePoster movie={movie} />
          <MovieContent movie={movie} />
        </MovieDetails>
      </MovieBox>
    </div>
  );
}

export default App;
