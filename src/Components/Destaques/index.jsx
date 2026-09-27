import './index.css'
import { Link } from "react-router-dom";
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
                    <Link to="/categoria-profissionais">
                        <img className='img-servico' src={pedreiro} alt='Pedreiro' />
                    </Link>
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <Link to="/categoria-profissionais">
                        <img className='img-servico' src={eletricista} alt='Eletricista' />
                    </Link>
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <Link to="/categoria-profissionais">
                        <img className='img-servico' src={encanador} alt='Encanador' />
                    </Link>
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <Link to="/categoria-profissionais">
                        <img className='img-servico' src={pintor} alt='Pintor' />
                    </Link>
                </div>
            </div>
            <div className='#'>
                <div className='card-servico'>
                    <Link to="/categoria-profissionais">
                        <img className='img-servico' src={diarista} alt='Diarista' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Destaques;
