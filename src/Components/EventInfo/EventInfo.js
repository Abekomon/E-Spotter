import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import "./EventInfo.css"
import csgoLogo from "../../Assets/csgo-logo.svg"
import valLogo from "../../Assets/val-logo.svg"
import lolLogo from "../../Assets/lol-logo.svg"

function updateText() {
  const curButton = document.querySelector('.info-fav-button')
  curButton.innerText = "Added!"
  curButton.classList.add('disabled')

} 

export default function EventInfo({addToFavorites, event}) {
  if(!event) {
    return (<Redirect to="/error" />)
  }

  let imagePath = event.logo
  if(event.game_name === "Valorant" && !event.logo) {
    imagePath = valLogo
  } else if (event.game_name === "CS:GO" && !event.logo) {
    imagePath = csgoLogo
  } else if (event.game_name === "LoL" && !event.logo) {
    imagePath = lolLogo
  }
  
  return (
    <div className="infoContainer shadow">
      <header className="infoHeader">
        <Link className="info-home-link" to="/">&lt; Back to home</Link>
        <button onClick={() => {
            updateText()
            addToFavorites(event.id)
          }} 
          className="info-fav-button">Add to Favorites</button>
      </header>
      <div className="infoBox">
        <img className="info-img" src={imagePath} alt={`${event.league_name} logo`} />
        <h2>{`${event.game_name} - ${event.league_name} - ${event.series_full}`}</h2>
        <h3>{event.type}</h3>
        <h4>Start Time:</h4><p className="info">{event.start_time}</p>
        <h4>Teams Playing:</h4><p className="info">{event.teams ? event.teams : 'Unknown'}</p>
        <h4>Total Matches:</h4><p className="info">{event.num_matches ? event.num_matches : `Unknown`}</p>
      </div>
    </div>
  )
}

EventInfo.propTypes = {
  addToFavorites: PropTypes.func, 
  event: PropTypes.object
}