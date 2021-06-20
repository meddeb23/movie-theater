import React, { useEffect } from "react";
import Item1 from "./item-1";
import { NavLink } from "react-router-dom";

export default function TvSeries({ name, list, loading }) {
  return (
    <>
      <div className="header">
        <h1>{name}</h1>
        <NavLink to={name}>see more</NavLink>
      </div>
      {list.length === 0 && !loading && <h1 className="error">No Movies</h1>}
      {loading && <h1>Loading...</h1>}
      <div className="list">
        <ul>
          {list.length !== 0 &&
            list.map((movie) => <Item1 key={movie.id + name} movie={movie} />)}
        </ul>
      </div>
    </>
  );
}
