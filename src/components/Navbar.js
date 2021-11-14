import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#258c12',
    color: 'white',
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography variant='h6'>The Netflix of Star Wars Movies</Typography>
        <Switch label='Dark Mode' />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
