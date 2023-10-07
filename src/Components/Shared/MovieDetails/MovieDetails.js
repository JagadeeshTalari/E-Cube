import { useParams } from "react-router-dom";

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

function MovieDetails() {
  const userId = useParams().userId;
  const movieDetails = MoviesList.filter((movie) => movie._id === userId);
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
      <button className="bookNow-btn">Book Now</button>
    </div>
  );
}
export default MovieDetails;
