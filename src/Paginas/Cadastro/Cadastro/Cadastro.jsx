import "./Cadastro.css";
import eletricista from "../../../assets/eletricista.png";
import { Link } from "react-router-dom";



function Cadastro() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Lado esquerdo */}
        <div className="login-info">
          <div className="image-box">
            <img src={eletricista} alt="Eletricista" />
          </div>

          <div className="info-text">
            <h1>
              ARQON <br />
            </h1>

            <p>
              Conectamos você aos melhores prestadores de serviço da sua região
              com rapidez, segurança e confiança. Encontre profissionais
              qualificados para reformas, manutenção, instalações e muito mais
              em um só lugar.
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <div className="login-form">
          <div className="login-card">
            <h2>CRIAR CADASTRO</h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nome</label>
                  <input type="text" id="firstName" placeholder="Primeiro nome" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Sobrenome</label>
                  <input type="text" id="lastName" placeholder="Sobrenome" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>


              

              <div className="form-group">
                <label htmlFor="cpf">Cpf</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Comfirma a senha</label>
                <input type="password" id="password" placeholder="********" />
              </div>

              <div className="form-group">
                <label htmlFor="password2">Confirma a senha</label>
                <input type="password" id="password2" placeholder="********" />
              </div>

              <button type="submit" className="btn-signup">
                Criar Conta
              </button>

              <p className="texto-login">
                Já possui uma conta? <Link to="/login">Login</Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
