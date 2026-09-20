import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaCadastro from "./Paginas/Cadastro/index";
import PaginaLogin from "./Paginas/Login/Index";
import Home from "./Paginas/Home/Index";
import PaginaSobre from "./Paginas/Sobre/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<PaginaSobre />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;