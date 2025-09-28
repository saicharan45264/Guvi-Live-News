import React from 'react';

function Spinner() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
