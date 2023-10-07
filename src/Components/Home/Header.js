import React, { useEffect, useState } from "react";
import Shows from "../Shared/Shows";
import axios from "axios";

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
];

function Header() {
  const [imgcount, setImgCount] = useState(0);
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/latest").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgcount === couraselImgs.length - 1) {
        setImgCount(0);
      } else {
        setImgCount(imgcount + 1);
      }
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imgcount]);

  if (!moviesList) return null;
  return (
    <div>
      <div className="slide">
        {/* slider */}

        <div className="courasel">
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === 0) {
                setImgCount(couraselImgs.length - 1);
              } else {
                setImgCount(imgcount - 1);
              }
            }}
          >
            Prev
          </button>

          <img src={couraselImgs[imgcount]} alt="" />
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === couraselImgs.length - 1) {
                setImgCount(0);
              } else {
                setImgCount(imgcount + 1);
              }
            }}
          >
            Next
          </button>
        </div>

        <div className="seeall">
          <h1 className="heading">Recommended Movies</h1>
          <a href="">See All</a>
        </div>

        <Shows MoviesList={moviesList}></Shows>
      </div>
    </div>
  );
}

export default Header;
