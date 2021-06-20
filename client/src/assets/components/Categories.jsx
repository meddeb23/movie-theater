import React from "react";
import useData from "../api/movieApi";
import OptionBtn from "./Button/OptionBtn";

export default function Categories() {
  const [data, isLoading] = useData("/genre/movie/list");
  return (
    <div className="optionNav">
      {data ? (
        data.length !== 0 &&
        data
          .slice(1, 5)
          .map((option) => <OptionBtn content={option.name} key={option.id} />)
      ) : isLoading ? (
        <h1 className="msg">Loading...</h1>
      ) : (
        <h1 className="msg">Error Loading please retry later</h1>
      )}
    </div>
  );
}
