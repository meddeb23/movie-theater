import React, { useEffect } from "react";
import useData from "../../api/movieApi";
import ShowCard from "../cards/ShowCard";
import Slider from "../sliders/Slider";
import { formatDate } from "../../utilities/formatDate";

export default function DataLoader({ dataUrl, color }) {
  const [data, isLoading] = useData(dataUrl);
  useEffect(() => console.log("DataLoader renders"));
  return data ? (
    <Slider>
      {data.slice(0, 10).map((item) =>
        item.title !== undefined ? (
          // for movies
          <ShowCard
            color={color}
            id={item.id}
            key={`movieid${item.id}`}
            // duration={formatDate(item.release_date)}
            image={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
            title={item.title}
            releaseDate={formatDate(item.release_date)}
          />
        ) : (
          // for tv shows
          <ShowCard
            color={color}
            id={item.id}
            key={`movieid${item.id}`}
            // duration={formatDate(item.release_date)}
            image={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
            title={item.name}
            releaseDate={formatDate(item.first_air_date)}
          />
        )
      )}
    </Slider>
  ) : isLoading ? (
    <h1 className="msg">Loading...</h1>
  ) : (
    <h1 className="msg">Error Loading please retry later</h1>
  );
}
