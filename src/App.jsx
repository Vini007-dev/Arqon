import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PaginaCadastro from "./Paginas/Cadastro/index";
import PaginaLogin from "./Paginas/Login/Index";
import Home from "./Paginas/Home/Index";
import PaginaSobre from "./Paginas/Sobre/Index";
import CategoriaProfissionais from "./Paginas/CategoriaProfissionais";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<PaginaSobre />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/categoria-profissionais" element={<CategoriaProfissionais />} />
        <Route path="/CategoriaProfissionais" element={<Navigate to="/categoria-profissionais" replace />} />
        <Route path="/Paginas/CategoriaProfissionais" element={<Navigate to="/categoria-profissionais" replace />} />
        <Route path="/src/Paginas/CategoriaProfissionais" element={<Navigate to="/categoria-profissionais" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
