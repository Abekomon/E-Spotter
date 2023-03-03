import React, { Component } from "react"
import "./Form.css"

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
  }

  render() {
    return (
      <select onChange={(e) => {
        this.props.updateEventData(e.target.value)  
      }}>
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
}