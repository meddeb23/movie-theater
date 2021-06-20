import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MovieItem({ movie, type }) {
  const [overlay, setOverlay] = useState(false);

  const displayDesc = (desc) => {
    return desc.length > 260 ? desc.slice(0, 260).concat("...") : desc;
  };
  const getLink = (movie) => {
    if (!movie.media_type) {
      return `/${type}/${movie.id}`;
    }
    return `/${movie.media_type}/${movie.id}`;
  };

  return (
    <li>
      <div
        className="img"
        onMouseOver={() => setOverlay(true)}
        onMouseOut={() => setOverlay(false)}
        style={{ zIndex: overlay ? 50 : 0 }}
      >
        <img
          className={overlay ? "overlayImg" : ""}
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt=""
        />
        <div className="overlay" style={{ display: overlay ? "flex" : "none" }}>
          <div className="title">
            {movie.media_type === "tv" ? movie.name : movie.title}
          </div>
          <div className="desc">{displayDesc(movie.overview)}</div>
          <NavLink to={getLink(movie)}>watch</NavLink>
          <div className="info">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <i className="fa fa-plus" aria-hidden="true"></i>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="title">
          {movie.media_type === "tv" ? movie.name : movie.title}
        </div>
        <div className="review">
          <div className="date">
            {movie.media_type === "tv"
              ? movie.first_air_date.slice(0, 4)
              : movie.release_date.slice(0, 4)}
          </div>
          <div className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
            {movie.vote_average}
          </div>
        </div>
      </div>
    </li>
  );
}
