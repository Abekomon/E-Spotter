import React from "react";
import { Link } from "react-router-dom";

export default function Loader() {
  return (
    <div className="loaderBox">
      <h3>Loading... Please be patient</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}