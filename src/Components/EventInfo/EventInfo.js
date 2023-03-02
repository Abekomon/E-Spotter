import React from "react";
import { Link } from "react-router-dom";
import "./EventInfo.css"

function updateText() {
  document.querySelector('.info-fav-button').innerText = "Added to Favorites!"
} 

export default function EventInfo({addToFavorites, event}) {
  return (
    <div className="infoContainer">
      <header className="infoHeader">
        <Link className="info-home-link" to="/">Back to home</Link>
        <button onClick={() => {
            updateText()
            addToFavorites(event.id)
          }} 
          className="info-fav-button">Add to Favorites</button>
      </header>
      <div className="infoBox">
        <h2>{event.serie.full_name}</h2>
        <h3>{event.videogame.name}</h3>
        <p>{event.begin_at}</p>
      </div>
    </div>
  )
}