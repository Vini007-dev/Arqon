// 1. IMPORTAÇÕES DE ARQUIVOS EXTERNOS
// Importamos o CSS para aplicar os estilos visuais e a imagem do profissional que servirá de fundo.
import './Hero.css';
import imagem from './arqontrabalhador.png';

// 2. COMPONENTE PRINCIPAL (HERO)
// O Hero é um componente funcional React que desenha toda a seção de boas-vindas no topo da página.
// Usamos React Fragments (<> e </>) para agrupar múltiplos elementos sem criar tags extras no HTML final.
function Hero() {
  return (
    <>
      {/* 3. CONTÊINER PRINCIPAL (.secao-hero)
          Esta div envolve toda a seção do Hero. Ela define o tamanho total do banner e serve 
          como base de posicionamento para o conteúdo que ficará sobreposto. */}
      <div className="secao-hero">

        {/* 4. IMAGEM DO BANNER (.imagem-hero)
            A imagem principal exibida ao fundo do Hero. O atributo 'src' diz de onde vem a imagem
            e 'alt' descreve o que há na imagem para leitores de tela (acessibilidade). */}
        <img src={imagem} className="imagem-hero" alt="Trabalhador Arqon" />

        {/* 5. CAIXA DE CONTEÚDO SOBREPOSTO (.conteudo-hero)
            Esta div guarda todo o conteúdo textual e o campo de pesquisa. Ela flutua acima 
            da imagem de fundo e organiza seus elementos filhos de cima para baixo (em coluna). */}
        <div className="conteudo-hero">

          {/* 6. TEXTOS EXPLICATIVOS DO BANNER
              - h1: O slogan principal da seção (Título de destaque). A tag <br /> quebra a linha do texto.
              - p: Um parágrafo de texto secundário que descreve brevemente o propósito do site. */}
          <h1 className="titulo-hero">
            Profissionais confiáveis <br />
            para cuidar do seu lar.
          </h1>
          <p className="subtitulo-hero">
            Encontre especialistas verificados para qualquer serviço,
            com segurança e rapidez.
          </p>

          {/* 7. BARRA DE PESQUISA E BUSCA (.busca-hero)
              Esta div agrupa o input (campo onde o usuário digita) e o button (botão de clique).
              O CSS colocará esses dois elementos lado a lado em telas grandes e empilhados em celulares. */}
          <div className="busca-hero">
            <input
              type="text"
              className="entrada-hero"
              placeholder="Qual serviço você precisa? (ex: encanador, eletricista, pintor)"
            />
            <button className="botao-hero">
              Buscar profissionais
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// 8. EXPORTAÇÃO DO COMPONENTE
// Permite que este componente seja importado e renderizado na página Home do nosso projeto.
export default Hero;
