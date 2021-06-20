import React from "react";

export default function OptionBtn({ color, style, content }) {
  return (
    <div className="optionBtn" style={{ ...style, borderColor: color }}>
      {content}
    </div>
  );
}
