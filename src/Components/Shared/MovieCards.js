import React from "react";
import "./MovieCards.css";

function MovieCards(props) {
  return (
    <div className="movieCard">
      <img src={props.img} alt="" />
      <button className="bookNow-btn">Book Now</button>
    </div>
  );
}

export default MovieCards;
