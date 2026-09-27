import "./index.css";

function Pesquisar () {
    return (
        <>
      <div className="secao-pesquisar">
        <div className="conteudo-pesquisar">
        <h1 className="titulo-pesquisar">
            Encontre profissionais confiáveis
        </h1>

          <div className="busca-pesquisar">
            <input
              type="text"
              className="entrada-pesquisar"
              placeholder="Qual serviço você precisa? (ex: encanador, eletricista, pintor)"
            />
            <button className="botao-pesquisar">
              Buscar profissionais
            </button>
          </div>
        </div>
      </div>
        </>
    )
}
export default Pesquisar;