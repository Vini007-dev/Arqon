import './index.css';
function DiferenciaisDeConfianca() {
    return (
        <>
            <section className="secao-diferenciais">
                <h2 className="titulo-secao">Diferenciais de Confiança</h2>

                <div className="grade-cards">

    {/* Card 1 */}
                    <div className="card-item">
                        <div className="icone-check">✓</div>
                        <h3 className="card-titulo">Profissionais verificados</h3>
                        <p className="card-descricao">
                            Profissionais verificados e qualificados para o serviço.
                        </p>
                    </div>
    {/* Card 2 */}
                    <div className="card-item">
                        <div className="icone-check">✓</div>
                        <h3 className="card-titulo">Avaliações reais</h3>
                        <p className="card-descricao">
                            Avaliações reais de clientes que já utilizaram a plataforma.
                        </p>
                    </div>

    {/* Card 3 */}
                    <div className="card-item">
                        <div className="icone-check">✓</div>
                        <h3 className="card-titulo">Atendimento rápido</h3>
                        <p className="card-descricao">
                            Atendimento rápido e suporte sempre que você precisar.
                        </p>
                    </div>

    {/* Card 4 */}
                    <div className="card-item">
                        <div className="icone-check">✓</div>
                        <h3 className="card-titulo">Suporte ao cliente</h3>
                        <p className="card-descricao">
                            Suporte dedicado para garantir a melhor experiência.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default DiferenciaisDeConfianca;