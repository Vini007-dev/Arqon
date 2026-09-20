import "./Login.css";
import eletricista from "../../../assets/eletricista.png";
import { Link } from "react-router-dom";


function Login() {
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
            <h2>FAZER LOGIN</h2>

            <form>
      

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Comfirma a senha</label>
                <input type="password" id="password" placeholder="********" />
              </div>

              

              <button type="submit" className="btn-signup">
                ENTRAR
              </button>

              <p className="texto-cadastro">
                Nao possui uma conta? <Link to="/cadastro">Cadastrar</Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
