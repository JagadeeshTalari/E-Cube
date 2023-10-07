import React, { useEffect, useState } from "react";
import Shows from "../Shared/Shows";

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
];
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

function Header() {
  const [imgcount, setImgCount] = useState(0);
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

        <Shows MoviesList={MoviesList}></Shows>
      </div>
    </div>
  );
}

export default Header;
