"use client"

import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { useCart } from "./CartContext"
import StepProgress from "./StepProgress"
import "/src/styles/info-produto.css"

export default function InfoProduto() {
  const navigate = useNavigate()
  const location = useLocation()
  const { addToCart } = useCart()
  const product = location.state?.product

  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    navigate("/loja")
    return null
  }

  // Usando a mesma imagem 4 vezes como no protótipo
  const productImages = [product.imageSrc, product.imageSrc, product.imageSrc, product.imageSrc]

  const handleAddToCart = () => {
    addToCart(product)
    alert("Produto adicionado ao carrinho!")
  }

  const handleBuyNow = () => {
    addToCart(product)
    navigate("/sacola")
  }

  return (
    <div className="info-produto-container">
      <nav className="navbar">
        <div className="logo">Aury</div>
        <ul className="nav-links">
          <li><a href="/home">Início</a></li>
          <li><a href="/home#arcos">Arcos</a></li>
          <li><a href="/loja">Loja</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>

      <StepProgress currentStep={1} />

      <main className="produto-content">
        <div className="produto-card">
          {/* Seção da Imagem */}
          <div className="produto-image-section">
            <div className="main-image-container">
              <img
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="main-product-image"
              />
            </div>
            <div className="thumbnail-container">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Informações */}
          <div className="produto-info-section">
            <h1 className="produto-title">{product.name}</h1>
            <p className="produto-vendor">Vendido e entregue por Aury</p>
            <p className="produto-price">R$100,00</p>
            <p className="produto-installments">Em até 2x sem juros</p>

            <div className="produto-description">
              <p>
                {/* Texto atualizado para corresponder ao protótipo */}
                O Snoopy era a pelúcia favorita de Jeni, uma menininha de 9 anos que dormia
                todo dia abraçada com ele. Hoje Jeni está na faculdade e o Snoopy precisa
                de outro dono para abraçá-lo.
              </p>
            </div>

            <div className="produto-actions">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                Adicionar ao carrinho
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}