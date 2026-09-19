import './index.css'; // Onde vai o CSS que mandei antes

// Componente principal da seção "Como Funciona"
function ComoFunciona() {
  return (
    <>
    <div className="container">
      {/* Título Principal */}
      <h1 className="titulo-sessao">Como Funciona a Arqon</h1>

      {/* Caixa que segura as 3 colunas */}
      <div className="caixa-colunas">
        
        {/* Coluna 1 */}
        <div className="coluna">
          <h3>1. Descreva o serviço</h3>
          <p>Qual serviço você precisa? <br/> (ex: eletricista em São Paulo)</p>
        </div>

        {/* Coluna 2 */}
        <div className="coluna">
          <h3>2. Receba orçamentos</h3>
          <p>Receba orçamentos e profissionais  <br/> para realizar o serviço.</p>
        </div>

        {/* Coluna 3 */}
        <div className="coluna">
          <h3>3. Contrate com segurança</h3>
          <p>Contrate com segurança e praticidade <br/>para o seu dia a dia.</p>
        </div>

      </div>
    </div>
    </>
  );
}

export default ComoFunciona;