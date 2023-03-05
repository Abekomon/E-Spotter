import React from "react"
import PropTypes from 'prop-types'
import "./Form.css"

export default function Form({updateEventData, updateForm, curValue}) {
  const handleChange = (e) => {
    updateForm(e.target.value)
    updateEventData(e.target.value)
  }

  return (
    <select 
      className="select-form"
      value={curValue}
      onChange={(e) => handleChange(e)}
    >
      <option value="disabled" disabled>Filter by game</option>
      <option value="">All</option>
      <option value="/rl">Rocket League</option>
      <option value="/csgo">Counter-Strike: Global Offensive</option>
      <option value="/valorant">Valorant</option>
      <option value="/lol">League of Legends</option>
      <option value="/codmw">Call of Duty: Modern Warefare</option>
      <option value="/dota2">Dota 2</option>
      <option value="/fifa">FIFA</option>
      <option value="/ow">Overwatch</option>
      <option value="/pubg">Player Unknown's: Battlegrounds</option>
      <option value="/r6siege">Rainbow 6: Siege</option>
      <option value="/starcraft-2">Starcraft 2</option>
      <option value="/starcraft-brood-war">Starcraft: Brood War</option>
    </select>
  )
}

Form.propTypes = {
  updateEventData: PropTypes.func, 
  updateForm: PropTypes.func, 
  curValue: PropTypes.string
}