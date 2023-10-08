import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieDetails({ apiLink }) {
  const [moviesList, setMoviesList] = useState(null);
  const userId = useParams().userId;

  useEffect(() => {
    axios.get(apiLink).then((response) => {
      setMoviesList(response.data);
    });
  }, []);

  if (!moviesList) return null;
  const movieDetails = moviesList.filter((movie) => movie._id === userId);
  const { name, language, rate, type, imageUrl } = movieDetails[0];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={imageUrl} alt="" />
        <div>
          <h1>{name}</h1>
          <p>9th Sep</p>
          <p>2hr 41min</p>
          <p>{rate}</p>
        </div>
      </div>
      <Link to="/ticketBooking">
        <button className="bookNow-btn">Book Now</button>
      </Link>
    </div>
  );
}
export default MovieDetails;
