import React from 'react';
import { useState } from 'react';
import MovieGrid from './components/MovieGrid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyle';
import { lightTheme, darkTheme } from './components/Themes';

const App = (props) => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <MovieGrid themeToggler={themeToggler} />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
