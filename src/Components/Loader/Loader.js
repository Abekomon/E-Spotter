import React from "react";
import "./Loader.css"

export default function Loader() {
  return (
    <div className="loader-box">
      <div className="loader-animation"><div></div><div></div><div></div><div></div></div>
      <h3>Loading... Please be patient</h3>
    </div>
  )
}