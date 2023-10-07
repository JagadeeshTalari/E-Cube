import React from "react";
import { Link } from "react-router-dom";
// import Movies from './Movies'
// import Eventslider from './Eventslider';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="right">
          <Link to="/" style={{ color: "white" }}>
            E-Cube
          </Link>

          <input
            type="text"
            name=""
            id=""
            placeholder="Search for movies here"
          />
        </div>
      </nav>

      <div className="menu">
        <div className="rightmenu">
          <Link to="/latestMovies">Latest Movies</Link>
          <Link to="/upcomingMovies">Upcoming Movies</Link>
          <Link to="/nearbyEvents">Nearby Events</Link>
        </div>
      </div>
    </div>
    // ---
  );
}

export default Navbar;
