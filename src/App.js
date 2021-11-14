import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { ImageList } from '@mui/material';
import moviesPosters from './assets/img-movies/index';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';

const App = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        {loading ? (
          <>
            <img src={logo} className='App-logo' alt='logo' />
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
          </ImageList>
        )}
      </header>
    </div>
  );
};

export default App;
