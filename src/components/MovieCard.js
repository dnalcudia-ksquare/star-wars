import * as React from 'react';
import { Button, ImageListItem, ImageListItemBar } from '@mui/material';
import BasicModal from './Modal';

const MovieCard = (props) => {
  const { title, episode_id, opening_crawl, director, release_date, poster } =
    props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ImageListItem key={episode_id}>
      <img src={[episode_id]} srcSet={[poster]} alt={title} loading='lazy' />
      <ImageListItemBar
        position='top'
        title={title}
        subtitle={<span>by: {director}</span>}
      />
      {opening_crawl ? (
        <ImageListItemBar
          position='bottom'
          title={<span>Released at: {release_date}</span>}
          subtitle={
            <Button onClick={handleOpen} variant='contained' color='success'>
              See opening
            </Button>
          }
        />
      ) : (
        <ImageListItemBar
          position='bottom'
          title={<span>Released at: {release_date}</span>}
        />
      )}
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={title}
        openingCrawl={opening_crawl}
      />
    </ImageListItem>
  );
};

export default MovieCard;
