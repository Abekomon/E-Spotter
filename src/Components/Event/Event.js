import React from "react";
import "./Event.css"
import { Link } from "react-router-dom";
import csgoLogo from "../../Assets/csgo-logo.svg"
import valLogo from "../../Assets/val-logo.svg"
import lolLogo from "../../Assets/lol-logo.svg"

function updateButton(id) {
  const curButton = document.querySelector(`.button-${id}`)
  curButton.classList.add('disabled')
  curButton.setAttribute('disabled', true)
  curButton.innerText = "Added!"
}

export default function Event({eventData, addToFavorites, removeFromFavorites}) {
  let imagePath = eventData.league.image_url
  if(eventData.videogame.name === "Valorant" && !imagePath) {
    imagePath = valLogo
  } else if (eventData.videogame.name === "CS:GO" && !imagePath) {
    imagePath = csgoLogo
  } else if (eventData.videogame.name === "LoL" && !imagePath) {
    imagePath = lolLogo
  }
  
  return (
    <div className="eventCard">
        <Link to={`/event/${eventData.id}`} className="eventLink" >
          <img className="leagueLogo" src={imagePath} />
          <h2>{eventData.videogame.name}</h2>
          <h3>{eventData.league.name}</h3>
          <p>{eventData.name}</p>
        </Link>
        { 
          document.URL.includes('favorites') ?
          <button className={`card-fav-button button-${eventData.id}`} onClick={() => {removeFromFavorites(eventData.id)}}>Remove</button> :
          <button 
            className={`card-fav-button button-${eventData.id}`} 
            onClick={() => {
              addToFavorites(eventData.id)
              updateButton(eventData.id)
            }}>Favorite</button>
        }
      </div>
  )
}
