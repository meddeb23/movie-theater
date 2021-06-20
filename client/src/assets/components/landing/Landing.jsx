import React from "react";

import { FaVideo } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="landing">
      <h1>welcome to movie theater</h1>
      <a href="#popular">
        <FaVideo fontSize={20} />
        <span>showtimes</span>
      </a>
    </div>
  );
}
