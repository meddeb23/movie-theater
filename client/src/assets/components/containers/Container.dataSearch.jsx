import React, { useEffect } from "react";
import useData from "../../api/movieApi";
import ShowCard from "../cards/ShowCard";
import Slider from "../sliders/Slider";
import { formatDate } from "../../utilities/formatDate";
import Loader from "../Loader";
import PaginationContoller from "../pagination/PaginationContoller";

export default function DataSearch({ dataUrl, color }) {
  const [data, isLoading, getData] = useData(dataUrl);
  const pagination = (page) => {
    getData(`${dataUrl}&page=${page}`);
  };
  useEffect(() => console.log("DataLoader renders => data = " + data));
  return data ? (
    <>
      <Slider>
        {data.results.length === 0 ? (
          <h1 className="msg">No results</h1>
        ) : (
          data.results.slice(0, Math.min(10, data.results.length)).map((item) =>
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
          )
        )}
      </Slider>
      <PaginationContoller
        current={data.page}
        total={data.total_pages}
        onChange={pagination}
      />
    </>
  ) : (
    <Loader isLoading={isLoading} />
  );
}
