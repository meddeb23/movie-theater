import React from "react";
import Landing from "../components/landing/Landing";
import OptionNav from "../components/OptionNav";
import SectionTitle from "../components/sectionTitle/SectionTitle";

import { DataLoader, Warpper } from "../components/containers";
import Categories from "../components/Categories";

export default function Home() {
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
