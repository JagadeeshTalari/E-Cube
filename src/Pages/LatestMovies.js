import MovieCards from "../Components/Shared/MovieCards";
import Shows from "../Components/Shared/Shows";

const MoviesList = [
  {
    _id: "5ab12666f36d2879268f2902",
    name: "Death Wish",
    language: "ENGLISH",
    type: "Action Crime Thriller",
    rate: 3.2,
    imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg",
  },
  {
    _id: "5ab12612f36d2879268f284a",
    name: "Black Panther",
    language: "ENGLISH",
    rate: 4.5,
    type: "Action Adventure Fantasy",
    imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
  },
  {
    _id: "5ab12678f36d2879268f291d",
    name: "Coco",
    language: "ENGLISH",
    type: "Adventure Animation Family",
    rate: 5,
    imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg",
  },
];
function LatestMovies() {
  return (
    <div>
      <Shows MoviesList={MoviesList}></Shows>
    </div>
  );
}
export default LatestMovies;
