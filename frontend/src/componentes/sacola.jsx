import { useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"
import StepProgress from "./StepProgress"
import "/src/styles/sacola.css"
import { BsTrash } from "react-icons/bs" 

export default function Sacola() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart } = useCart()

  const handleConfirm = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!")
      return
    }
    navigate("/tela-compra")
  }

  const handleCancel = () => {
    navigate("/loja")
  }

  return (
    <div className="sacola-container">
      <nav className="navbar">
        <div className="logo">Aury</div>
        <ul className="nav-links">
          <li><a href="/home">Início</a></li>
          <li><a href="/home#arcos">Arcos</a></li>
          <li><a href="/loja">Loja</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>

      <StepProgress currentStep={2} />

      <main className="sacola-content">
        <h1 className="sacola-title">Sua sacola</h1>

        <div className="sacola-card">
          <div className="produtos-background-card">
            <div className="sacola-header">
              <span className="header-produto">Produto</span>
              <span className="header-valor">Valor</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart"><p>Seu carrinho está vazio</p></div>
            ) : (
              <div className="sacola-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="sacola-item">
                    <label className="item-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <div className="item-image">
                      <img src={item.imageSrc || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                    <button className="item-delete" onClick={() => removeFromCart(item.id)}>
                      <BsTrash />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="sacola-actions">
          <button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
          <button className="btn-confirm" onClick={handleConfirm}>Confirmar</button>
        </div>
      </main>
    </div>
  )
}