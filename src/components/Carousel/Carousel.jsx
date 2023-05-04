import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import axios from "axios";
import { img_300, noPicture } from "../config/config";

export default function Carousel({ media_type, id }) {
  const [credits, setCredits] = useState();

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(data);
    setCredits(data.cast);
    // console.log(credits)
  };

  useEffect(() => {
    fetchCredits();
    console.log("Carousel")
  }, []);

  const responsive= {
    0: {
        items: 3,
    },
    512: {
        items: 5,
    },
    1024: {
        items: 7,
    },
  }

  const handleDragStart = (e) => e.preventDefault();

  const items = credits?.map((c) => (
    <div className="carouselItem">
        {console.log("HEy")}
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  return <AliceCarousel mouseTracking items={items} responsive={responsive} autoPlay disableButtonsControls disableDotsControls infinite />;
}
