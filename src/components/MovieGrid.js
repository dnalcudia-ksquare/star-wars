import React from 'react';
import loadingGif from '../assets/loading.gif';
import { useState, useEffect } from 'react';
import { ImageList } from '@mui/material';
import moviesPosters from '../assets/img-movies';
import axios from 'axios';
import MovieCard from './MovieCard';
import Navbar from './Navbar';

const MovieGrid = (props) => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { themeToggler } = props;

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://swapi.py4e.com/api/films/')
      .then(function (response) {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar
        movies={movies}
        setMovies={setMovies}
        themeToggler={themeToggler}
      />
      <header className='App-header'>
        {loading ? (
          <>
            <img src={loadingGif} alt='baby_yoda' />
            <h5>Loading...</h5>
          </>
        ) : (
          <ImageList variant='masonry' cols={3} gap={8}>
            {data.map((movie) => (
              <MovieCard
                key={movie.episode_id}
                title={movie.title}
                poster={moviesPosters[movie.episode_id]}
                director={movie.director}
                release_date={movie.release_date}
                opening_crawl={movie.opening_crawl}
              />
            ))}
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                director={movie.director}
                release_date={movie.release_date}
              />
            ))}
          </ImageList>
        )}
      </header>
    </div>
  );
};

export default MovieGrid;
