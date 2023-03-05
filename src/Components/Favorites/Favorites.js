import React from "react";
import Event from "../Event/Event";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./Favorites.css"

export default function Favorites({data, removeFromFavorites, addToFavorites}) {
  const favEvents = data.map(event => {
    return <Event 
      key={event.id}
      id={event.id}
      logo={event.logo}
      game_name={event.game_name}
      league_name={event.league_name}
      series_name={event.series_name}
      removeFromFavorites={removeFromFavorites}
      addToFavorites={addToFavorites}
    />
  })

  return (
    <>
      <nav className="fav-nav">
        <Link className="nav-link" to="/">&lt; Back to home</Link>
      </nav>
      { 
        favEvents.length ?
        <>
          <h2 className="favorite-text">Favorited Events</h2>
          <div className="eventGrid">
            {favEvents}
          </div>
        </> : 
        <div className="empty-fav-view">
            <h2 className="no-favorite-text">No Favorites, add some!</h2>
        </div>
      }
    </>
  )
}

Favorites.propTypes = {
  data: PropTypes.array,
  removeFromFavorites: PropTypes.func,
  addToFavorites: PropTypes.func
}