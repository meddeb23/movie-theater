import React from "react";
import OptionBtn from "./Button/OptionBtn";

export default function OptionNav({ options }) {
  return (
    <div className="optionNav">
      {options.length !== 0 &&
        options.map((option, index) => (
          <OptionBtn content={option} key={index + option + "optionNav"} />
        ))}
    </div>
  );
}
