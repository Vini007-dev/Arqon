import { Link } from "react-router-dom";
import "./Footer.css";
import logo from './logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-Geral">
        
        {/* Logo e Marca */}
        <div className="footer-seção">
          <div className="logo-Arqon">
            <img src={logo} alt="logo Arqcon" className="logo" />
            <h2 className="Titulo-imagem">
              <span className="Palavra1">Arqon </span><br />   {/*Marcar texto */}
              <span className="Palavra2"> Connect</span> {/*   Marcar texto */}
              </h2>
           
          </div>
          <p className="descrição">
            Construindo soluções digitais com inovação e qualidade.
          </p>
        </div>

        {/* Links */}
        <div className="footer-seção">
          <h3 className="title">Links úteis</h3>
          <ul className="list">
            <li><Link to ="/Home">Home</Link></li>
            <li><Link to="/Sobre">Sobre nós</Link></li>
            <li><a href="servicos.html">Serviços</a></li>
            <li><a href="areadevendas.html">Área de Vendas</a></li>
            <li><a href="Suporte.html">Suporte</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-seção">
          <h3 className="title">Contato</h3>
          <p>Email: Arqonconnect@gmail.com</p>
          <p>Telefone: (81) 99999-9999</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-seção">
          <h3 className="title">Redes sociais</h3>
          <div className="socials">
            <a href="https://facebook.com/arqonConnect" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com/arqonConnect" target="_blank" rel="noopener noreferrer">
             Instagram
            </a>
            <a href="https://twitter.com/arqonConnect" target="_blank" rel="noopener noreferrer">
             Twitter
            </a>
            <a href="https://linkedin.com/company/arqonConnect" target="_blank" rel="noopener noreferrer">
               LinkedIn
            </a>
            <a href="#">GVConsultorias</a>
          </div>
        </div>

        {/* GV+ Consultorias */}
        <div className="footer-seção">
          <h3 className="title">GV+ Consultorias Empresariais</h3>
          <p className="description">
            Soluções estratégicas para impulsionar o crescimento e a inovação da sua empresa, conectando novas visões de negócios.
          </p>
          <p><a href="consultoria.jsx">Saiba mais</a></p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Arqon. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
