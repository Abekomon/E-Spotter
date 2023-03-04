import React from "react";
import { Link, Redirect } from "react-router-dom";
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

  const teamNames = event.teams.map(team => team.name).join(",  ")

  let imagePath = event.league.image_url
  if(event.videogame.name === "Valorant" && !imagePath) {
    imagePath = valLogo
  } else if (event.videogame.name === "CS:GO" && !imagePath) {
    imagePath = csgoLogo
  } else if (event.videogame.name === "LoL" && !imagePath) {
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
        <img className="info-img" src={imagePath} alt={`${event.league.name} logo`} />
        <h2>{`${event.league.name} - ${event.serie.full_name}`}</h2>
        <h3>{event.name}</h3>
        <h4>Start Time:</h4><p className="info">{event.begin_at}</p>
        <h4>Teams Playing:</h4><p className="info">{teamNames.length ? teamNames : 'Unknown'}</p>
        <h4>Total Matches:</h4><p className="info">{event.matches.length ? event.matches.length : `Unknown`}</p>
      </div>
    </div>
  )
}