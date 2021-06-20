import React from "react";
import { NavLink } from "react-router-dom";
import OptionBtn from "../Button/OptionBtn";

export default function ShowCard({
  color,
  duration,
  id,
  image,
  releaseDate,
  title,
}) {
  return (
    <div className="card-container">
      {image && (
        <div className="img-container">
          <NavLink to={`/movie/${id}`}>
            <img src={image} alt="" />
          </NavLink>
        </div>
      )}
      <h1>{title}</h1>
      {duration && <h2>{duration}</h2>}
      <h2>{releaseDate}</h2>
      <OptionBtn
        content="watch now"
        style={{ fontSize: "14px" }}
        color={color}
      />
    </div>
  );
}
