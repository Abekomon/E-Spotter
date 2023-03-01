import React from "react";
import "./Event.css"

export default function Event({eventData}) {
  return (
    <div className="eventCard">
      <h2>{eventData.videogame.name}</h2>
      <h3>{eventData.league.name}</h3>
      <p>{eventData.name}</p>
    </div>
  )
}
