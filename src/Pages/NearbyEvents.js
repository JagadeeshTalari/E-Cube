import MovieCards from "../Components/Shared/MovieCards";
import Shows from "../Components/Shared/Shows";

const MoviesList = [
  {
    _id: "5ab12698f36d2879268f293e",
    name: "Incredibles 2",
    language: "ENGLISH",
    type: "Animated",
    rate: 4,
    imageUrl:
      "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg",
  },
  {
    _id: "5ab12686f36d2879268f2930",
    name: "Mission Impossible",
    language: "English",
    rate: 2.5,
    type: "Horror Thriller",
    imageUrl:
      "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png",
  },
];

function NearbyEvents() {
  return (
    <div>
      <Shows MoviesList={MoviesList}></Shows>
    </div>
  );
}
export default NearbyEvents;
