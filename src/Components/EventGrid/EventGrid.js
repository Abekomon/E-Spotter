import React from "react";
import Event from "../Event/Event";
import PropTypes from 'prop-types'
import "./EventGrid.css"

export default function EventGrid({data, addToFavorites}) {
  const events = data.map(event => {
    return <Event 
      key={event.id}
      id={event.id}
      logo={event.logo}
      game_name={event.game_name}
      league_name={event.league_name}
      series_name={event.series_name}
      addToFavorites={addToFavorites}
    />
  })

  return (
    <div className="eventGrid">
      {events}
    </div>
  )
}

EventGrid.propTypes = {
  data: PropTypes.array, 
  addToFavorites: PropTypes.func
}