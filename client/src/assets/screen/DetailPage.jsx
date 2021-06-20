import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieSlider from "../components/MovieSlider";
import { FaPlay } from "react-icons/fa";
import { formatDate } from "../utilities/formatDate";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function DetailPage({ match }) {
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);

  const displayRunTime = (runTime) => {
    return `${parseInt(runTime / 60)}h ${runTime % 60}min`;
  };

  useEffect(() => {
    Axios.get(`/api/v1/movie/movie/${match.params.id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const onSimilarMovie = () => {
    Axios.get(`/api/v1/movie/movie/${match.params.id}/similar`)
      .then((res) => {
        setSimilar(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="detail">
      {movie && (
        <div
          className="head"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
          }}
        >
          <div className="info">
            <h1>{movie.title}</h1>
            {/* <h3>{movie.tagline}</h3> */}
            <div className="sub-info">
              <div className="date">
                {movie.release_date && formatDate(movie.release_date)}
              </div>
              <div className="seperation-bar"></div>
              <div className="genre">
                {movie.genres &&
                  movie.genres.map((i) => (
                    <span key={`genre${i.id}`}>{`${i.name} `}</span>
                  ))}
              </div>
            </div>
            <div className="overview">
              <h1>The Story</h1>
              <div>
                <p>{movie.overview}</p>
                <button>read more</button>
              </div>
            </div>
            <div className="footer-info">
              <div className="runTime">
                <h3>time</h3>
                <p>{displayRunTime(movie.runtime)}</p>
              </div>
              <div className="star">
                <h3>average rate</h3>
                <p>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {` ${movie.vote_average}`}
                </p>
              </div>
            </div>
            <a className="similar" onClick={() => onSimilarMovie()}>
              similar movies
            </a>
          </div>
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt=""
            />
            <a href={movie.homepage} className="watch-btn">
              <div className="play-btn">
                <FaPlay fontSize={18} />
              </div>
              <p>Watch now</p>
            </a>
          </div>
        </div>
      )}
      {similar.length !== 0 && (
        <div className="similar">
          <MovieSlider type={"movie"} name={"Similar Movies"} list={similar} />
        </div>
      )}
    </div>
  );
}
