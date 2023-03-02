import React from "react";
import Event from "../Event/Event";
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
    <div className="eventGrid">
      {favEvents}
    </div>
  )

}