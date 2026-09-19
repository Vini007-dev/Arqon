import Hero from './Hero';
import ComoFunciona from './ComoFunciona';
import DiferenciaisDeConfianca from './DiferenciaisDeConfianca';
import Navbar from '../Cadastro/Navbar/Navbar';
import Footer from '../Cadastro/Footer/Footer';
import Destaques from './Destaques'

function Home () {
  return (
    <>

      <Navbar />
      <Hero />
      <Destaques/>
      <ComoFunciona />
      <DiferenciaisDeConfianca />
      <Footer />

      
      
      
    
    </>
  );
}

export default Home