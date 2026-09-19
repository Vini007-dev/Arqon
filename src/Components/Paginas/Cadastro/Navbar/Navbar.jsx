import { useState } from "react";
import "./Navbar.css";
import logo from '../Footer/logo.png';



function Navbar() {
  const [open, setOpen] = useState(false);

  const StyleImg = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginTop: "-15px"

  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img  style={StyleImg} src={logo} alt="logo Arqcon" className="navbar-logo" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`navbar-menu ${open ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Duvidas Frequentes</a></li>
            <li><a href="./Sobre">Quem Somos</a></li>
          </ul>
          <ul className="navbar-nav">
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
