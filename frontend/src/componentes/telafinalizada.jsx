"use client"

import { useNavigate } from "react-router-dom"
import StepProgress from "./StepProgress"
import "/src/styles/telafinalizada.css"

export default function TelaFinalizada() {
  const navigate = useNavigate()

  const handleDownloadApp = () => {
    alert("Redirecionando para download do app...")
  }

  return (
    <div className="tela-finalizada-container">
      <nav className="navbar">
        <div className="logo">Aury</div>
        <ul className="nav-links">
          <li>
            <a href="/home">Início</a>
          </li>
          <li>
            <a href="/home#arcos">Arcos</a>
          </li>
          <li>
            <a href="/loja">Loja</a>
          </li>
          <li>
            <a href="#">Perfil</a>
          </li>
        </ul>
      </nav>

      <StepProgress currentStep={4} />

      <main className="finalizada-content">
        <div className="finalizada-card">
          <h1 className="finalizada-title">Sua compra foi finalizada!</h1>
          <p className="finalizada-subtitle">Este objeto vai continuar contando uma história com você.</p>

          <button className="btn-download-app" onClick={handleDownloadApp}>
            Baixe o app.
          </button>

          <p className="finalizada-footer">Rastreamento pelo app Aury.</p>
        </div>
      </main>
    </div>
  )
}
