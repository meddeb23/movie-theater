import React, { useRef } from "react";
import MovieItem from "../components/MovieItem";
import { NavLink } from "react-router-dom";

export default function MovieSlider({ name, list, loading, type }) {
  const popularSlide = useRef();

  const goRight = () => {
    const slider = popularSlide.current;
    if (-slider.offsetLeft < slider.offsetWidth - window.innerWidth) {
      slider.style.left = slider.offsetLeft - 419 + "px";
    }
  };
  const goLeft = () => {
    const slider = popularSlide.current;
    if (slider.offsetLeft < -10) {
      slider.style.left = slider.offsetLeft + 419 + "px";
    }
  };

  return (
    <>
      <div className="header">
        <h1>{name}</h1>
        <NavLink to={name}>see more</NavLink>
      </div>
      {list.length === 0 && !loading && <h1 className="error">No Movies</h1>}
      {loading && <h1>Loading...</h1>}
      <div className="list">
        <ul ref={popularSlide}>
          {list.length !== 0 &&
            list.map((movie) => (
              <MovieItem movie={movie} key={movie.id + name} type={type} />
            ))}
        </ul>
        <div className="left" onClick={() => goLeft()}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div className="right" onClick={() => goRight()}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}
