import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <h1><Link className="logo-home-link" to="/">E-Spotter</Link></h1>
  )
}