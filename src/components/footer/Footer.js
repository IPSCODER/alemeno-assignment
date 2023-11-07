import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import logo from "../../logo.png"

const Footer = () => {
  return (
    <footer>
      <Link to={"/"} > <img src={logo} alt='logo' /> </Link>
    </footer>
  )
}

export default Footer