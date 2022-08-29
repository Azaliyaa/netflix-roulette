import React from 'react';
import PropTypes from "prop-types";
import { useToggle } from './../../../components/hooks';
import { ContextMenu } from './../../../images/icons';
import { ContextWindow } from './ContextWindow/ContextWindow';
import styles from './Movie.module.css'

const Movie = ({ film, onEditMovieClick, onDeleteMovieClick, setFilmId, onCardClick }) => {
    const [windowOpened, setWindowOpened] = useToggle();

    return (
      <div className={styles.container}>
        <ContextWindow
          windowOpened={windowOpened}
          setWindowOpened={setWindowOpened}
          onEditMovieClick={onEditMovieClick}
          onDeleteMovieClick={onDeleteMovieClick}
          setFilmId={setFilmId}
          id={film.id}
        />
        <span
          className={styles.icon}
          onClick={setWindowOpened}
        >
          <ContextMenu />
        </span>
        <img src={film.picture} className={styles.movie} onClick={() => onCardClick(film.id)} />
        <div className={styles.movies__name}>
          <span>{film.name}</span>
          <div className={styles.movies__year}>{film.year}</div>
        </div>
        <div className={styles.movies__description}>{film.description}</div>
      </div>
    );
}

Movie.propTypes = {
  film: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    description: PropTypes.string,
    movieUrl: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    runtime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    overview: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    genre: PropTypes.string,
  }),
  onEditMovieClick: PropTypes.func,
  onDeleteMovieClick: PropTypes.func,
  setFilmId: PropTypes.func,
  onCardClick: PropTypes.func
}

export { Movie }