import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function SerieDetail({ match }) {
  const [serie, setSerie] = useState(null);

  const displayRunTime = (runTime) => {
    const hour = parseInt(runTime / 60);
    const minute = runTime % 60;
    let message = "";
    if (hour !== 0) {
      message += hour + " hour";
    } else if (minute !== 0) {
      message += minute + " minutes";
    }
    return message;
  };

  useEffect(() => {
    Axios.get(`/api/v1/movie/tv/${match.params.id}`)
      .then((res) => setSerie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="detail tv">
      {serie && (
        <div
          className="head"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${serie.poster_path})`,
          }}
        >
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
              alt=""
            />
          </div>
          <div className="info">
            <h1>{serie.name}</h1>
            <h3>{serie.tagline}</h3>

            <div className="dateTime">
              <div className="date">{serie.first_air_date.slice(0, 4)}</div>
              <div className="runTime">
                {displayRunTime(serie.episode_run_time[0])}
              </div>
              <div className="numberOfSeason">
                {serie.number_of_seasons} seasons
              </div>
              <div className="star">
                <i className="fa fa-star" aria-hidden="true"></i>
                {serie.vote_average}
              </div>
            </div>
            <a href={serie.homepage} className="watch">
              Watch Now
            </a>
            <p>{serie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}
