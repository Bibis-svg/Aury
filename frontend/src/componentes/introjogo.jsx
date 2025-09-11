import { useNavigate } from "react-router-dom"
import "../styles/introjogo.css"

export default function IntroJogo() {
  const navigate = useNavigate()

  const handleVamosLa = () => {
    window.open("https://aury-ashy.vercel.app/jogopuzzle.html", "_blank")
  }

  return (
    <div className="introjogo-container">
      <div className="content-wrapper">
        <h1 className="title">Área da Tecnologia</h1>

        <div className="description-text">
          <p>
            Decodifique os hieróglifos digitais e revele, nos fragmentos do código, a trajetória da nossa evolução. Cada
            linha escondida guarda não apenas lógica, mas também memória daquilo que fomos. Perseverança e raciocínio
            serão suas armas diante do labirinto tecnológico.
          </p>

          <p className="second-paragraph">Mostre que ainda somos dignos de escrever nosso próprio futuro.</p>
        </div>

        <button className="vamos-la-btn" onClick={handleVamosLa}>
          Vamos lá
        </button>
      </div>
    </div>
  )
}
