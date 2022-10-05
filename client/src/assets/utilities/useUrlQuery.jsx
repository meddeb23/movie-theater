import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const useUrlQuery = (...p) => {
  const { search } = useLocation();
  if (!search) return { q: "" };
  const value = {};
  search
    .replaceAll("?", "")
    .replaceAll("%20", " ")
    .split("&")
    .forEach((el) => {
      let [a, b] = el.split("=");
      value[a] = b;
    });
  return value;
};

export default useUrlQuery;
