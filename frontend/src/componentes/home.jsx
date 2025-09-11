"use client"

import "../styles/home.css"
import { useNavigate } from "react-router-dom"

// --- Imagens importadas ---
import topImage from "/src/assets/image/gradientiiir.png"
import esfera1 from "/src/assets/image/esfera1.png"
import esfera2 from "/src/assets/image/esfera2.png"
import esfera3 from "/src/assets/image/esfera3.png"
import esfera4 from "/src/assets/image/esfera4.png"
// --- NOVOS VETORES IMPORTADOS ---
import vector17 from "/src/assets/image/Vector 17.png"
import vector18 from "/src/assets/image/Vector 18.png"

export default function Home() {
  const navigate = useNavigate()

  const arcosData = [
    { id: 1, imgSrc: esfera1, initialContent: "1.", hoverContent: "arte e cultura" },
    { id: 2, imgSrc: esfera2, initialContent: "2.", hoverContent: "emoções" },
    { id: 3, imgSrc: esfera3, initialContent: "3.", hoverContent: "inovação" },
    { id: 4, imgSrc: esfera4, initialContent: "4.", hoverContent: "resistência" },
  ]

  const handleSecondButton = () => {
    navigate("/introjogo")
  }

  return (
    <div className="main-container">
      <section className="intro-section">
        {/* --- ESTRUTURA DA SEÇÃO INICIAL ATUALIZADA --- */}
        <img src={topImage || "/placeholder.svg"} alt="imagem topo" className="fixed-image" />
        <img src={vector17 || "/placeholder.svg"} alt="detalhe decorativo" className="vector-17" />
        <img src={vector18 || "/placeholder.svg"} alt="detalhe decorativo" className="vector-18" />

        <div className="title-top">
          <h1>bem-vindo</h1>
        </div>
        <div className="text-center">
          <p>No meio de circuitos e máquinas a humanidade se perdeu.</p>
          <p>Esse é um convite para reconectar-se com sua alma.</p>
        </div>
        <div className="centered-arrow-container">
          <button className="floating-btn1">→</button>
        </div>
      </section>

      <section className="arcos-section">
        <h3>você passará por 4 arcos</h3>
        <div className="arcos">
          {arcosData.map((arco) => (
            <div className="arco" key={arco.id}>
              <img src={arco.imgSrc || "/placeholder.svg"} className="esfera" alt={`Arco ${arco.id}`} />
              <div className="arco-content">
                <span className="initial-text">{arco.initialContent}</span>
                <span className="hover-text">{arco.hoverContent}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="back-arrow-container">
          <button className="floating-btn1" onClick={handleSecondButton}>
            →
          </button>
        </div>
      </section>
    </div>
  )
}
