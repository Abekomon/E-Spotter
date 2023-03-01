import React from "react";
import "./EventInfo.css"

export default function EventInfo({event}) {
  return (
    <div className="infoContainer">
      <h2>{event.serie.full_name}</h2>
      <h3>{event.videogame.name}</h3>
      <p>{event.being_at}</p>
    </div>
  )
}