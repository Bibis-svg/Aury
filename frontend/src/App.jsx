import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "../src/componentes/cadastro"
import Home from "./componentes/home"
import IntroJogo from "./componentes/introjogo"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cadastro" replace />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/introjogo" element={<IntroJogo />} />
      </Routes>
    </Router>
  )
}

export default App
