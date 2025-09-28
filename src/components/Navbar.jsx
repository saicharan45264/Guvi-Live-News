import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top shadow">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold text-warning" to="/">📰 Guvi Live News</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
