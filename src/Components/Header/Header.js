import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <h1>
      <Link className="logo-home-link" to="/"><span className="logo-o"></span>E-Sp &nbsp;tter</Link>
    </h1>
  )
}