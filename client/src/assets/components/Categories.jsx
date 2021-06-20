import React from "react";
import useData from "../api/movieApi";
import OptionBtn from "./Button/OptionBtn";

export default function Categories() {
  const [data] = useData("/genre/movie/list");
  return (
    <div className="optionNav">
      {data &&
        data.length !== 0 &&
        data
          .slice(1, 5)
          .map((option) => <OptionBtn content={option.name} key={option.id} />)}
    </div>
  );
}
