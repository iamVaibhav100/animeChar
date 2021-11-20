import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return <div className="card-list">
    {
        props.animes.map(anime => (
          <Card key={anime.anime_id} anime={anime} />
        ))
      }
  </div>;
};