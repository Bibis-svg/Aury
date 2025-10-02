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
        <h1 className="title">Arco da resistência</h1>

        <div className="description-text">
          <p>
            A história da humanidade foi colocada à prova diante de guerras, crises e desastres. Ainda assim, seguimos em frente, resistindo e nos reinventando a cada queda.
          </p>

          <p className="second-paragraph">Neste arco, você enfrentará sua própria provação: superar os obstáculos que a vida põe em seu caminho.</p>
        </div>

        <button className="vamos-la-btn" onClick={handleVamosLa}>
          Vamos lá
        </button>
      </div>
    </div>
  )
}
