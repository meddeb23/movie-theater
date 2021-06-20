import React from "react";

export default function SectionTitle({ color, style, subTitle, title }) {
  return (
    <div className="sectionTitle" style={style}>
      <h3 style={{ color }}>{subTitle}</h3>
      {title && (
        <h1>
          {
            <span style={{ fontWeight: "bold" }}>
              {title.substring(0, title.indexOf(" "))}{" "}
            </span>
          }
          {title.substr(title.indexOf(" ") + 1)}
        </h1>
      )}
    </div>
  );
}
