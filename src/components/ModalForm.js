import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm(props) {
  const { open, handleClose, onAddMovie } = props;
  const [idValue, setId] = useState();
  const [titleValue, setTitle] = useState();
  const [producerValue, setProducer] = useState();
  const [releaseDateValue, setReleaseDate] = useState();
  const [directorValue, setDirector] = useState();
  const [posterValue, setPoster] = useState();
  const [planetValue, setPlanet] = useState();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddMovie({
      id: idValue,
      title: titleValue,
      producer: producerValue,
      release_date: releaseDateValue,
      director: directorValue,
      poster: posterValue,
      planet: planetValue,
    });
    setId('');
    setTitle('');
    setProducer('');
    setReleaseDate('');
    setDirector('');
    setPoster('');
    setPlanet('');
  };

  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/planets/')
      .then(function (response) {
        setPlanets(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add a new film
          </Typography>
          <form>
            <TextField
              fullWidth
              onChange={(e) => setId(e.target.value)}
              value={idValue}
              id='movieId'
              label='Movie ID'
              variant='standard'
              type='number'
              defaultValue='1'
            />
            <TextField
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              value={titleValue}
              id='movieTitle'
              label='Title'
              variant='standard'
            />
            <TextField
              fullWidth
              onChange={(e) => setProducer(e.target.value)}
              value={producerValue}
              id='movieProducer'
              label='Producer'
              variant='standard'
              margin='dense'
            />
            <TextField
              fullWidth
              margin='normal'
              id='movieReleaseDate'
              label='Release Date'
              type='date'
              onChange={(e) => setReleaseDate(e.target.value)}
              value={releaseDateValue}
              defaultValue='2017-05-24'
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              helperText='Please select the release date'
            />
            <TextField
              fullWidth
              onChange={(e) => setDirector(e.target.value)}
              value={directorValue}
              id='movieDirector'
              label='Director'
              variant='standard'
            />
            <TextField
              fullWidth
              onChange={(e) => setPoster(e.target.value)}
              value={posterValue}
              id='moviePoster'
              label='Poster'
              variant='standard'
              margin='normal'
              helperText='Please enter your poster img url'
            />
            <TextField
              fullWidth
              select
              onChange={(e) => setPlanet(e.target.value)}
              value={planetValue}
              id='moviePlanet'
              label='Planet'
              variant='standard'
              helperText='Please select your planet'
            >
              {planets.map((planet) => (
                <MenuItem key={planet.index} value={planet.name}>
                  {planet.name}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <Button
              onClick={handleOnSubmit}
              variant='contained'
              color='success'
            >
              Submit movie
            </Button>
          </form>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}
