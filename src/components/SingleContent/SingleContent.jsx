import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../config/config";
import { Badge } from "@mui/material";
// import { dark } from "@mui/material/styles/createPalette";

const SingleContent = ({
  id,
  title,
  poster,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      {vote_average && (
        <Badge
          badgeContent={vote_average}
          color={
            vote_average > 7
              ? "success"
              : vote_average > 4
              ? "primary"
              : "danger"
          }
        />
      )}
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="sunTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className="sunTitle">{date}</span>
    </div>
  );
};

export default SingleContent;
