"use client"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCart } from "./CartContext"
import StepProgress from "./StepProgress"
import "/src/styles/tela-compra.css"

export default function TelaCompra() {
  const navigate = useNavigate()
  const { cartItems, getCartTotal, saveOrderData, clearCart } = useCart()

  const [formData, setFormData] = useState({
    pais: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    paymentMethod: "pix",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentChange = (method) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }))
  }

  const handleSubmit = () => {
    // Validação básica
    if (!formData.pais || !formData.estado || !formData.cidade || !formData.rua || !formData.numero) {
      alert("Por favor, preencha todos os campos obrigatórios do endereço.")
      return
    }

    // Salvar dados do pedido
    const orderInfo = {
      ...formData,
      items: cartItems,
      total: getCartTotal(),
      date: new Date().toISOString(),
    }

    saveOrderData(orderInfo)
    clearCart()
    navigate("/tela-finalizada")
  }

  const subtotal = getCartTotal()
  const frete = 7
  const total = subtotal + frete

  return (
    <div className="tela-compra-container">
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

      <StepProgress currentStep={3} />

      <main className="compra-content">
        <div className="compra-layout">
          <div className="compra-left">
            <section className="produtos-section">
              <h2 className="section-title">Seus produtos</h2>
              <div className="produtos-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="produto-item-compra">
                    <img src={item.imageSrc || "/placeholder.svg"} alt={item.name} className="produto-img-small" />
                    <div className="produto-info-compra">
                      <h3>{item.name}</h3>
                      <p>{item.description || "Produto vintage único"}</p>
                    </div>
                    <div className="produto-price-compra">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="total-items">
                Total de {cartItems.length} {cartItems.length === 1 ? "item" : "itens"}:
                <span className="total-value">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
            </section>

            <section className="endereco-section">
              <h2 className="section-title">Endereço de envio</h2>
              <div className="form-grid">
                <input
                  type="text"
                  name="pais"
                  placeholder="País"
                  value={formData.pais}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="estado"
                  placeholder="Estado"
                  value={formData.estado}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="rua"
                  placeholder="Rua"
                  value={formData.rua}
                  onChange={handleInputChange}
                  className="form-input full-width"
                />
                <input
                  type="text"
                  name="numero"
                  placeholder="Número"
                  value={formData.numero}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                  value={formData.complemento}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <button className="btn-salvar">Salvar</button>
            </section>

            <section className="pagamento-section">
              <h2 className="section-title">Método de pagamento</h2>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={formData.paymentMethod === "pix"}
                    onChange={() => handlePaymentChange("pix")}
                  />
                  <span className="payment-label">
                    <span className="payment-icon">💳</span>
                    Pix
                  </span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="cartao"
                    checked={formData.paymentMethod === "cartao"}
                    onChange={() => handlePaymentChange("cartao")}
                  />
                  <span className="payment-label">
                    <span className="payment-icon">💳</span>
                    Cartão de crédito
                  </span>
                </label>
              </div>
            </section>
          </div>

          <div className="compra-right">
            <div className="resumo-card">
              <h2 className="section-title">Detalhes do pagamento</h2>
              <div className="resumo-line">
                <span>Total dos produtos</span>
                <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="resumo-line">
                <span>Total do frete</span>
                <span>R$ {frete.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="resumo-line total-line">
                <span>Pagamento total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
              <button className="btn-comprar" onClick={handleSubmit}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
