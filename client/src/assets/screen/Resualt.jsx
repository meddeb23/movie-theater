import React from "react";
import { useEffect } from "react";
import useData from "../api/movieApi";
import { DataSearch } from "../components/containers";
import SearchLanding from "../components/landing/SearchLanding";
import useUrlQuery from "../utilities/useUrlQuery";

const searchList = [];

export default function Resualt() {
  // TODO: add a dynamic select for params
  const params = useUrlQuery("q");
  const [data, isLoading] = useData(`/search?q=${params.q}`);

  console.log(data);
  useEffect(() => {}, [params.q]);

  return (
    <div>
      <SearchLanding query={params.q} />
      <DataSearch dataUrl={`/search?q=${params.q}`} />
    </div>
  );
}
