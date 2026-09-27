import mario from "../../assets/mario_encanador.jpeg";
import cr7 from "../../assets/cr7_jardim.jpeg";
import cat from "../../assets/cat_pintor.jpeg";
import homer from "../../assets/homer_eletricista.jpeg";
import "./index.css";

function Profissionais() {
  return (
    <>
      <section className="secao-diferenciais">
        <h2 className="titulo-secao">Conheça os nossos profissionais</h2>

        <div className="grade-cards">
          {/* Card 1 */}
          <div className="card-item">
            <div className="card-imagem">
              <img src={mario} alt="Mario Encanador" />
            </div>
            <h3 className="card-titulo">Mário - Encanador</h3>
            <p className="card-descricao">
              Profissional verificado e qualificado para atender as suas necessidades.
            </p>
          </div>
          {/* Card 2 */}
          <div className="card-item">
            <div className="card-imagem">
              <img src={cr7} alt="CR7 Jardim" />
            </div>

            <h3 className="card-titulo">CR7 - Jardineiro</h3>
            <p className="card-descricao">
              Comigo seu jardim vai ficar lindo e bem cuidado, garantindo um ambiente agradável. Siiiiiiuuuuuu!
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-item">
            <div className="card-imagem">
              <img src={cat} alt="Cat Pintor" />
            </div>
            <h3 className="card-titulo">Cat - Pintor</h3>
            <p className="card-descricao">
              Profissional criativo e dedicado para transformar sua visão em realidade. Miau!
            </p>
          </div>

          {/* Card 4 */}
          <div className="card-item">
            <div className="card-imagem">
              <img src={homer} alt="Homer Eletricista" />
            </div>
            <h3 className="card-titulo">Homer - Eletricista</h3>
            <p className="card-descricao">
              Profissional experiente e confiável para garantir a segurança e eficiência das instalações elétricas. D'oh!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profissionais;
