import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieSlider from "../components/MovieSlider";
import { FaPlay } from "react-icons/fa";
import { formatDate, displayRunTime } from "../utilities/formatDate";
import Loader from "../components/Loader";
import useData from "../api/movieApi";

export default function DetailPage({ match }) {
  // const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [data, isLoading] = useData(
    `/movie/${match.params.id}`,
    match.params.id
  );

  const onSimilarMovie = () => {
    Axios.get(`/api/v1/movie/movie/${match.params.id}/similar`)
      .then((res) => {
        setSimilar(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="detail">
        {data ? (
          <div
            className="head"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
            }}
          >
            <div className="info">
              <h1>{data.title}</h1>
              {/* <h3>{data.tagline}</h3> */}
              <div className="sub-info">
                <div className="date">
                  {data.release_date && formatDate(data.release_date)}
                </div>
                <div className="seperation-bar"></div>
                <div className="genre">
                  {data.genres &&
                    data.genres.map((i) => (
                      <span key={`genre${i.id}`}>{`${i.name} `}</span>
                    ))}
                </div>
              </div>
              <div className="overview">
                <h1>The Story</h1>
                <div>
                  <p>{data.overview}</p>
                  <button>read more</button>
                </div>
              </div>
              <div className="footer-info">
                <div className="runTime">
                  <h3>time</h3>
                  <p>{displayRunTime(data.runtime)}</p>
                </div>
                <div className="star">
                  <h3>average rate</h3>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    {` ${data.vote_average}`}
                  </p>
                </div>
              </div>
              <a className="similar" onClick={() => onSimilarMovie()}>
                similar movies
              </a>
            </div>
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                alt=""
              />
              <a href={data.homepage} className="watch-btn">
                <div className="play-btn">
                  <FaPlay fontSize={18} />
                </div>
                <p>Watch now</p>
              </a>
            </div>
          </div>
        ) : (
          <Loader isLoading={isLoading} />
        )}
      </div>
      {similar.length !== 0 && (
        <div className="similar">
          <MovieSlider type={"movie"} name={"Similar Movies"} list={similar} />
        </div>
      )}
    </>
  );
}
