import React from 'react';
import ModalForm from './ModalForm';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Switch,
  Button,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#258c12',
  },
}));

const Navbar = (props) => {
  const { movies, setMovies, themeToggler } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onAddMovie = (movie) => {
    if (!movies) {
      setMovies([movie]);
    } else {
      setMovies([...movies, movie]);
    }
    console.log(movie);
  };

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography variant='h6'>The Netflix of Star Wars Movies</Typography>
        <Switch onChange={themeToggler} label='Dark Mode' color='default' />
        <Button onClick={handleOpen} variant='contained' color='success'>
          Add film
        </Button>
      </Toolbar>
      <ModalForm
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onAddMovie={onAddMovie}
      />
    </AppBar>
  );
};
export default Navbar;
