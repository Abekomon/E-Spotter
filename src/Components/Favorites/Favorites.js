import React from "react";
import Event from "../Event/Event";
import { Link } from "react-router-dom";
import "./Favorites.css"

export default function Favorites({data, removeFromFavorites, addToFavorites}) {
  const favEvents = data.map(event => {
    return <Event 
      key={event.id}
      eventData={event}
      removeFromFavorites={removeFromFavorites}
      addToFavorites={addToFavorites}
    />
  })

  return (
    <>
      <Link to="/">Back to home</Link>
      { favEvents.length ?
        <div className="eventGrid">
          {favEvents}
        </div>
        : <div className="empty-fav-view">
            <h2>No Favorites, add some!</h2>
        </div>
      }
    </>
  )

}