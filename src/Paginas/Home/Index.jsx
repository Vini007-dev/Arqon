import Hero from "../../Components/Hero";
import ComoFunciona from "../../Components/ComoFunciona";
import DiferenciaisDeConfianca from "../../Components/DiferenciaisDeConfianca";
import Footer from "../../Components/Footer";
import Destaques from "../../Components/Destaques";
import Navbar from "../../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destaques />
      <ComoFunciona />
      <DiferenciaisDeConfianca />
      <Footer />
    </>
  );
}

export default Home;