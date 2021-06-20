import React, { useEffect } from "react";
import useData from "../../api/movieApi";
import ShowCard from "../cards/ShowCard";
import Slider from "../sliders/Slider";
import { formatDate } from "../../utilities/formatDate";
import Loader from "../Loader";

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
            media_type="movie"
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
            media_type="tv"
            releaseDate={formatDate(item.first_air_date)}
          />
        )
      )}
    </Slider>
  ) : (
    <Loader isLoading={isLoading} />
  );
}
