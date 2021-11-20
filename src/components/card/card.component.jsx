import React from "react";
import "./card.styles.css"

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="anime_image" src={props.anime.anime_img} />
        <h1>{props.anime.anime_name}</h1>
    </div>
  );
};