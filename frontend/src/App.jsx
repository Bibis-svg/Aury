import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "../src/componentes/cadastro"
import Home from "../src/componentes/home"
import IntroJogo from "../src/componentes/introjogo"
import TelaInicial from "../src/componentes/tela-inicial"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tela-inicial" replace />} />
        <Route path="/tela-inicial" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/introjogo" element={<IntroJogo />} />
      </Routes>
    </Router>
  )
}

export default App
