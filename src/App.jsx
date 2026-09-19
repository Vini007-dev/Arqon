import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaCadastro from "./Components/Paginas/Cadastro/index";
import PaginaLogin from "./Components/Paginas/Login/index";
import Home from './Components/Paginas/Home/Index'
import './Components/Paginas/Cadastro/Footer/Footer'
// import Footer from "./Components/Paginas/Cadastro/Footer/Footer";
import Paginasobre from "./Components/Paginas/Sobre/Index";


function App() {
  return (

    

    <BrowserRouter>
     
      <Routes>
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Paginasobre />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

