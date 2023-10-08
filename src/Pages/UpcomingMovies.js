import { useEffect, useState } from "react";
import Shows from "../Components/Shared/Shows";
import axios from "axios";

function UpcomingMovies() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/upcomingMovies").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);

  if (!moviesList) return null;

  return (
    <>
      <h1>Upcoming Movies</h1>
      <Shows MoviesList={moviesList}></Shows>
    </>
  );
}
export default UpcomingMovies;
