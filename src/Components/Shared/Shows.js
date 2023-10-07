import React from "react";
import MovieCards from "./MovieCards";
import "./Shows.css";
import { Link } from "react-router-dom";

function Shows({ MoviesList }) {
  return (
    <>
      <div className="shows">
        {MoviesList.map((movie) => {
          return (
            <Link key={movie._id} to={movie._id}>
              <MovieCards id={movie._id} img={movie.imageUrl}></MovieCards>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Shows;
