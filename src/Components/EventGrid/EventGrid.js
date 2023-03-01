import React from "react";
import Event from "../Event/Event";
import "./EventGrid.css"

export default function EventGrid({data}) {
  const events = data.map(event => {
    return <Event 
      key={event.id}
      eventData={event}
    />
  })

  return (
    <div className="eventGrid">
      {events}
    </div>
  )
}