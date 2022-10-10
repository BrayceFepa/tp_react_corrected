import React from "react";

function Count({number, txt}) {
  return (
    <div className="count d-flex flex-column bg-white rounded-circle p-2 justify-content-center align-items-center fw-bold" style={{ width: '100px', height: '100px' }}>
          <span className="display-5 text-danger">{number}</span>
          <span className="text-dark">{txt}</span>
    </div>
  );
}

export default Count;