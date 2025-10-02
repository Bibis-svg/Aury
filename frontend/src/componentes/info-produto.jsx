import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import StepProgress from "./StepProgress";
import "/src/styles/info-produto.css";
import { products } from '../data/products';

import Vector45 from "/src/assets/image/Vector45.png";
import Vector17 from "/src/assets/image/Vector17.png";

export default function InfoProduto() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { productId } = useParams(); 
  const product = products.find(p => String(p.id) === productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    navigate("/loja");
    return null;
  }

  const productImages = [product.imageSrc, product.imageSrc, product.imageSrc, product.imageSrc];

  const handleAddToCart = () => {
    addToCart(product);
    alert("Produto adicionado ao carrinho!");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/sacola");
  };

  return (
    <div className="info-produto-container">
      <img src={Vector45} alt="Vetor decorativo esquerdo" className="vector-left" />
      <img src={Vector17} alt="Vetor decorativo direito" className="vector-right" />

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

          <div className="produto-info-section">
            <h1 className="produto-title">{product.name}</h1>
            <p className="produto-vendor">Vendido e entregue por Aury</p>
            
            {/* INFORMAÇÃO DINÂMICA: Preço */}
            <p className="produto-price">{product.price}</p>
            
            <p className="produto-installments">Em até 2x sem juros</p>

            <div className="produto-description">
              {/* INFORMAÇÃO DINÂMICA: Descrição */}
              <p>{product.description}</p>
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
  );
}