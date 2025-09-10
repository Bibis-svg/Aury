import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "../src/componentes/cadastro"
import Home from "../src/componentes/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cadastro" replace />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
