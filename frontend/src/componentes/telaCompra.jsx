import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "./CartContext"
import StepProgress from "./StepProgress"
import "/src/styles/tela-compra.css"

// --- DADOS FICTÍCIOS (em um app real, viriam de um banco de dados) ---
const DADOS_ENDERECOS_SALVOS = [
  {
    id: 1,
    nome: "Casa",
    rua: "Av. Paulista",
    numero: "1578",
    bairro: "Bela Vista",
    complemento: "Apto 101",
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil",
  },
  {
    id: 2,
    nome: "Trabalho",
    rua: "R. da Glória",
    numero: "123",
    bairro: "Glória",
    complemento: "Sala 50",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    pais: "Brasil",
  },
]

// Valores de frete fictícios por estado
const VALORES_FRETE = {
  SP: 7.0,
  RJ: 12.5,
  MG: 15.0,
  default: 20.0, // Frete padrão para outros estados
}
// --- FIM DOS DADOS FICTÍCIOS ---

export default function TelaCompra() {
  const navigate = useNavigate()
  const { cartItems, getCartTotal, saveOrderData, clearCart } = useCart()

  const [enderecosSalvos, setEnderecosSalvos] = useState(DADOS_ENDERECOS_SALVOS)
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(
    enderecosSalvos[0] || null
  )

  const [novoEndereco, setNovoEndereco] = useState({
    nome: "",
    rua: "",
    numero: "",
    bairro: "",
    complemento: "",
    cidade: "",
    estado: "",
    pais: "",
  })
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [frete, setFrete] = useState(0)

  useEffect(() => {
    if (enderecoSelecionado) {
      const valorFrete =
        VALORES_FRETE[enderecoSelecionado.estado.toUpperCase()] ||
        VALORES_FRETE["default"]
      setFrete(valorFrete)
    } else {
      setFrete(0)
    }
  }, [enderecoSelecionado])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNovoEndereco((prev) => ({ ...prev, [name]: value }))
  }

  const handleSalvarNovoEndereco = (e) => {
    e.preventDefault()
    if (!novoEndereco.rua || !novoEndereco.cidade || !novoEndereco.estado) {
      alert("Preencha pelo menos a rua, cidade e estado.")
      return
    }
    const novoId = Date.now()
    const enderecoParaSalvar = {
      id: novoId,
      ...novoEndereco,
      nome: novoEndereco.nome || `Endereço ${novoId}`,
    }

    setEnderecosSalvos((prev) => [...prev, enderecoParaSalvar])
    setEnderecoSelecionado(enderecoParaSalvar)
    setMostrandoFormulario(false)
    setNovoEndereco({
      nome: "",
      rua: "",
      numero: "",
      bairro: "",
      complemento: "",
      cidade: "",
      estado: "",
      pais: "",
    })
  }

  const handleSubmit = () => {
    if (!enderecoSelecionado) {
      alert("Por favor, selecione um endereço de entrega.")
      return
    }
    const orderInfo = {
      endereco: enderecoSelecionado,
      paymentMethod,
      items: cartItems,
      total: getCartTotal() + frete,
      date: new Date().toISOString(),
    }

    saveOrderData(orderInfo)
    clearCart()
    navigate("/tela-finalizada")
  }

  const subtotal = getCartTotal()
  const total = subtotal + frete

  return (
    <div className="tela-compra-container">
      <nav className="navbar">
        <div className="logo">Aury</div>
        <ul className="nav-links">
          <li><a href="/home">Início</a></li>
          <li><a href="/home#arcos">Arcos</a></li>
          <li><a href="/loja">Loja</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>

      <div className="page-content-after-navbar">
        <StepProgress currentStep={3} />
        <main className="compra-content">
          <div className="compra-layout">
            <div className="compra-left">
              <section className="produtos-section">
                <h2 className="section-title">Seus produtos</h2>
                <div className="produtos-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="produto-item-compra">
                      <img
                        src={item.imageSrc || "/placeholder.svg"}
                        alt={item.name}
                        className="produto-img-small"
                      />
                      <div className="produto-info-compra">
                        <h3>{item.name}</h3>
                        <p>{item.description || "Produto vintage único"}</p>
                      </div>
                      <div className="produto-price-compra">{item.price}</div>
                    </div>
                  ))}
                </div>
                <div className="total-items">
                  Total de {cartItems.length}{" "}
                  {cartItems.length === 1 ? "item" : "itens"}:
                  <span className="total-value">
                    R$ {subtotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </section>

              {/* ===== SEÇÃO DE ENDEREÇO MODIFICADA ===== */}
              <section className="endereco-section">
                <h2 className="section-title">Endereço de envio</h2>
                <div className="enderecos-salvos-lista">
                  {enderecosSalvos.map((end) => (
                    <label
                      key={end.id}
                      className={`endereco-salvo-item ${
                        enderecoSelecionado?.id === end.id ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="endereco"
                        checked={enderecoSelecionado?.id === end.id}
                        onChange={() => setEnderecoSelecionado(end)}
                      />
                      <span className="custom-radio"></span>
                      <div className="endereco-info">
                        <strong>{end.nome}</strong>
                        <p>{`${end.rua}, ${end.numero} - ${end.cidade}, ${end.estado}`}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => setMostrandoFormulario(!mostrandoFormulario)}
                  className="btn-adicionar-endereco"
                >
                  {mostrandoFormulario
                    ? "Cancelar"
                    : "+ Adicionar novo endereço"}
                </button>

                {mostrandoFormulario && (
                  <form
                    className="form-novo-endereco"
                    onSubmit={handleSalvarNovoEndereco}
                  >
                    <div className="form-grid">
                      <input type="text" name="nome" placeholder="Nome do Endereço (ex: Casa)" value={novoEndereco.nome} onChange={handleInputChange} className="form-input full-width"/>
                      <input type="text" name="pais" placeholder="País" value={novoEndereco.pais} onChange={handleInputChange} className="form-input" required/>
                      <input type="text" name="estado" placeholder="Estado (ex: SP)" value={novoEndereco.estado} onChange={handleInputChange} className="form-input" required/>
                      <input type="text" name="cidade" placeholder="Cidade" value={novoEndereco.cidade} onChange={handleInputChange} className="form-input" required/>
                      <input type="text" name="bairro" placeholder="Bairro" value={novoEndereco.bairro} onChange={handleInputChange} className="form-input"/>
                      <input type="text" name="rua" placeholder="Rua" value={novoEndereco.rua} onChange={handleInputChange} className="form-input full-width" required/>
                      <input type="text" name="numero" placeholder="Número" value={novoEndereco.numero} onChange={handleInputChange} className="form-input" required/>
                      <input type="text" name="complemento" placeholder="Complemento" value={novoEndereco.complemento} onChange={handleInputChange} className="form-input"/>
                    </div>
                    <button type="submit" className="btn-salvar">
                      Salvar Endereço
                    </button>
                  </form>
                )}
              </section>

              <section className="pagamento-section">
                <h2 className="section-title">Método de pagamento</h2>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === "pix"}
                      onChange={() => setPaymentMethod("pix")}
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
                      checked={paymentMethod === "cartao"}
                      onChange={() => setPaymentMethod("cartao")}
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
    </div>
  )
}