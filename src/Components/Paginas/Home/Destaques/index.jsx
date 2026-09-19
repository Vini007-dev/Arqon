import './index.css'
import pedreiro from './ImgsCards/pedreiro.png';
import eletricista from './ImgsCards/eletricista.png';
import encanador from './ImgsCards/encanador.png';
import pintor from './ImgsCards/pintor.png';
import diarista from './ImgsCards/diarista.png';

function Destaques() {
    return (
        <div className='estilo-cards'>
            <div className='#'>
                <div className='card-servico'>
                    <img className='img-servico' src={pedreiro} alt='Pedreiro' />
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <img className='img-servico' src={eletricista} alt='Eletricista' />
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <img className='img-servico' src={encanador} alt='Encanador' />
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <img className='img-servico' src={pintor} alt='Pintor' />
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <img className='img-servico' src={diarista} alt='Diarista' />
                </div>
            </div>
        </div>
    );
}

export default Destaques;