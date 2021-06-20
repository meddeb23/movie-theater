import React, { useEffect, useState } from "react";
import useData from "../api/movieApi";
import { FaPlay } from "react-icons/fa";

import { formatDate, displayRunTime } from "../utilities/formatDate";

export default function SerieDetail({ match }) {
  const [data, isLoading] = useData(`/tv/${match.params.id}`);

  return (
    <>
      <div className="detail tv">
        {data && (
          <div
            className="head"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
            }}
          >
            <div className="info">
              <h1>{data.name}</h1>
              {/* <h3>{data.tagline}</h3> */}
              <div className="sub-info">
                <div className="date">
                  {data.first_air_date && formatDate(data.first_air_date)}
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
                  <p>{displayRunTime(data.episode_run_time[0])}</p>
                </div>
                <div className="star">
                  <h3>average rate</h3>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    {` ${data.vote_average}`}
                  </p>
                </div>
              </div>
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
        )}
      </div>
    </>
  );
}
