import React from "react";
import "./Event.css"
import { Link } from "react-router-dom";
import csgoLogo from "../../Assets/csgo-logo.svg"
import valLogo from "../../Assets/val-logo.svg"
import lolLogo from "../../Assets/lol-logo.svg"

function updateButton(id) {
  const curButton = document.querySelector(`.button-${id}`)
  curButton.setAttribute('disabled', true)
  curButton.classList.add('disabled')
  curButton.innerText = "Added!"
}

export default function Event({id, logo, game_name, league_name, series_name, addToFavorites, removeFromFavorites}) {
  if(game_name === "Valorant" && !logo) {
    logo = valLogo
  } else if (game_name === "CS:GO" && !logo) {
    logo = csgoLogo
  } else if (game_name === "LoL" && !logo) {
    logo = lolLogo
  }
  
  return (
    <div className="eventCard shadow">
        <Link to={`/event/${id}`} className="eventLink" >
          <img className="leagueLogo" src={logo} alt={`${league_name} logo`} />
          <h2>{league_name}</h2>
          <h3>{series_name}</h3>
          <p>{game_name}</p>
        </Link>
        { 
          document.URL.includes('favorites') ?
          <button className={`card-fav-button button-${id}`} onClick={() => {removeFromFavorites(id)}}>Remove</button> :
          <button 
            className={`card-fav-button button-${id}`} 
            onClick={() => {
              addToFavorites(id)
              updateButton(id)
            }}>Favorite</button>
        }
      </div>
  )
}
