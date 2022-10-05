import React from "react";

export default function PaginationContoller({ current, total, onChange }) {
  return (
    <div className="pagination-container">
      <div
        className="nav-box box"
        onClick={() => onChange(Math.max(1, current - 1))}
      >
        prev
      </div>
      <div className="box" onClick={() => onChange(current)}>
        {current}
      </div>
      <div className="box" onClick={() => onChange(total)}>
        {total}
      </div>
      <div
        className="nav-box box"
        onClick={() => onChange(Math.min(total, current + 1))}
      >
        next
      </div>
    </div>
  );
}
