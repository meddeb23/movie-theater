import React from "react";
import { NavLink } from "react-router-dom";

export default function Item1({ movie }) {
  const displayDesc = (desc) => {
    let descLength = 240;
    if (window.innerWidth < 445) descLength = 200;
    return desc.length > descLength
      ? desc.slice(0, descLength).concat("...")
      : desc;
  };
  return (
    <li className="item-1">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h3>{movie.name}</h3>
        <div className="dateTime">
          <div className="date">
            {movie.first_air_date && movie.first_air_date.slice(0, 4)}
          </div>
          <div className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
            {movie.vote_average}
          </div>
        </div>
        <p>{displayDesc(movie.overview)}</p>
        <NavLink to={`/tv/${movie.id}`}>watch</NavLink>
      </div>
    </li>
  );
}
