import React from "react";
import Landing from "../components/landing/Landing";
import OptionNav from "../components/OptionNav";
import SectionTitle from "../components/sectionTitle/SectionTitle";

import { DataLoader, Warpper } from "../components/containers";
import Categories from "../components/Categories";

export default function Home() {
  // const [searchResualt, setSearchResualt] = useState([]);
  // const [search, setSearch] = useState(null);

  // const onSearch = (search) => {
  //   Axios.get(`/api/v1/movie/search/movie?query=${search}`)
  //     .then((res) => {
  //       setSearch(search);
  //       setSearchResualt(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="home">
      <Landing />
      <Warpper>
        <OptionNav options={["movies", "tv shows", "series"]} />
        <SectionTitle subTitle="feature" title="popular Showing" />
        <DataLoader dataUrl="/popular" />
        <SectionTitle
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          subTitle="feature"
          title="All Genre"
        />
        <Categories />

        <SectionTitle color="#3F3CFF" subTitle="feature" title="tv shows" />
        <DataLoader dataUrl="/tv" color="#3F3CFF" />

        <SectionTitle subTitle="feature" title="tranding shows" />
        <DataLoader dataUrl="/tranding" />
      </Warpper>
    </div>
  );
}
