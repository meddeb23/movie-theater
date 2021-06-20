import React from "react";

export default function Loader({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <h1 className="msg">Loading...</h1>
      ) : (
        <h1 className="msg">Error Loading please retry later</h1>
      )}
    </>
  );
}
