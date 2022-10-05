import React from "react";

export default function SearchLanding({ query }) {
  return (
    <div className="landing searchLanding">
      <p>
        <span>Search: </span> {query}
      </p>
    </div>
  );
}
