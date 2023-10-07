import Shows from "../Components/Shared/Shows";

const MoviesList = [
  {
    _id: "5ab126b6f36d2879268f2943",
    name: "Avengers",
    language: "ENGLISH",
    type: "Actione",
    rate: 2,
    imageUrl:
      "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg",
  },
  {
    _id: "5ab4e66b0c1d2b27846c6407",
    name: "Black Friday",
    language: "ENGLISH",
    rate: 4.5,
    type: "Action Adventure Fantasy",
    imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
  },
];

function UpcomingMovies() {
  return <Shows MoviesList={MoviesList}></Shows>;
}
export default UpcomingMovies;
