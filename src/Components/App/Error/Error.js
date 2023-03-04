import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"

export default function Error() {
  return(
    <div className="error-box">
      <h2>Something went wrong!</h2>
      <p>If the problem persists, please try again later</p>
      <Link className="error-link" to="/">&lt; Back to Home</Link>
    </div>
  )
}