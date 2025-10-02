"use client"

import { useNavigate } from "react-router-dom";
import "/src/styles/loja.css";
import DropdownFilter from './DropdownFilter';

// IMAGENS PRODUTOS
import gridBackgroundImg from "/src/assets/image/grid-background.png";
import colecaoGeekImg from "/src/assets/image/colecao-geek.png";
import boneImg from "/src/assets/image/bone.png";
import cameraImg from "/src/assets/image/camera.png";
import bolaImg from "/src/assets/image/bola.png";
import raqueteImg from "/src/assets/image/raquete.png";
import vinilBeatlesImg from "/src/assets/image/vinil-beatles.png";
import tenisImg from "/src/assets/image/tenis.png";
import guitarraImg from "/src/assets/image/guitarra.png";
import camisetaImg from "/src/assets/image/camiseta.png";
import relogioImg from "/src/assets/image/relogio.png";
import vinilGagaImg from "/src/assets/image/vinil-gaga.png";
import snoopyImg from "/src/assets/image/snoopy.png";

// IMAGENS GERAIS E DECORATIVAS
import florVetor from "/src/assets/image/flor-vetor.png";
import elipse1 from "/src/assets/image/Ellipse-roxa-1.png";
import elipse2 from "/src/assets/image/Ellipse-roxa-2.png";
import elipse3 from "/src/assets/image/Ellipse-roxa-3.png";
import elipse4 from "/src/assets/image/Ellipse-amarelo-1.png";
import elipse5 from "/src/assets/image/Ellipse-amarelo-2.png";

// IMAGENS PLANOS
import plansBackgroundImg from "/src/assets/image/grid-background-produtos.png";
import caixaGrandeImg from "/src/assets/image/caixa-grande.png";
import caixaMediaImg from "/src/assets/image/caixa-media.png";
import ticketImg from "/src/assets/image/ticket.png";

// DADOS DOS PRODUTOS
const products = [
    { id: "geek", name: "Coleção GEEK", subtitle: "Coleção completa de quadrinhos", imageSrc: colecaoGeekImg, isFeatured: true, bgColor: "#A8A6DA" },
    { id: 1, name: "Boné infantil", price: "R$ 15", imageSrc: boneImg, bgColor: "#B2B0D8" },
    { id: 2, name: "Câmera vintage", price: "R$ 30", imageSrc: cameraImg, bgColor: "#8C88DC" },
    { id: 3, name: "Bola antiga", price: "R$ 35", imageSrc: bolaImg, bgColor: "#D1CDE5" },
    { id: 4, name: "Raquete de tênis", price: "R$ 35", imageSrc: raqueteImg, bgColor: "#A8A7D9" },
    { id: 5, name: "Vinil Beatles", price: "R$ 80", imageSrc: vinilBeatlesImg, bgColor: "#9D9BDA" },
    { id: 6, name: "Tênis 38/40", price: "R$ 95", imageSrc: tenisImg, bgColor: "#CCCCD8" },
    { id: 7, name: "Guitarra Fender Stratocaster", price: "R$ 150", imageSrc: guitarraImg, isLarge: true, bgColor: "#8C88DC" },
    { id: 8, name: "Camiseta banda vintage", price: "R$ 40", imageSrc: camisetaImg, bgColor: "#B2B0D8" },
    { id: 9, name: "Relógio", price: "R$ 200", imageSrc: relogioImg, bgColor: "#8C88DC" },
    { id: 10, name: "Vinil Lady Gaga", price: "R$ 190", imageSrc: vinilGagaImg, bgColor: "#D1CDE5" },
    { id: 11, name: "Pelúcia Snoopy", price: "R$ 100", imageSrc: snoopyImg, bgColor: "#9D9BDA" },
];

export default function Loja() {
    const navigate = useNavigate();

    // Opções para os filtros
    const faixaEtariaOptions = ['Crianças', 'Adolescente', 'Adulto', 'Idoso'];
    const precoOptions = ['Até R$50', 'R$50 - R$100', 'R$100 - R$200', 'Acima de R$200'];
    const tipoOptions = ['Roupas', 'Acessórios', 'Decoração', 'Música'];
    const generoOptions = ['Masculino', 'Feminino', 'Unissex'];

    // Função para navegar para a página de detalhes do produto
    const handleProductClick = (product) => {
        // Se o produto for o "destaque", não faz nada, pois ele já tem um botão próprio
        if (product.isFeatured) {
            return;
        }
        // Navega para a rota de info do produto, passando os dados do produto
        navigate("/info-produto", { state: { product } });
    };

    return (
        <div className="loja-container">
            <div className="background-ellipses">
                <img src={elipse1} alt="" id="elipse1" />
                <img src={elipse2} alt="" id="elipse2" />
                <img src={elipse3} alt="" id="elipse3" />
                <img src={elipse4} alt="" id="elipse4" />
                <img src={elipse5} alt="" id="elipse5" />
            </div>

            <nav className="navbar">
                <div className="logo">Aury</div>
                <ul className="nav-links">
                    <li><a href="/home">Início</a></li>
                    <li><a href="/home#arcos">Arcos</a></li>
                    <li><a href="/loja">Loja</a></li>
                    <li><a href="#">Perfil</a></li>
                </ul>
            </nav>

            <section className="loja-hero" id="hero">
                <img src={florVetor} alt="Vetor de flor" className="flor-vetor" />
                <div className="hero-content">
                    <p className="hero-text-1">
                        Não vendemos matéria, e sim <span className="text-white">lembrança.</span>
                    </p>
                    <p className="hero-text-2">
                        Cada item é um <span className="font-pecita">fragmento</span> de vida,
                        <br />
                        um convite para <span className="font-pecita">sentir</span> de novo.
                    </p>
                    <p className="hero-text-3">
                        Onde o passado encontra o presente e
                        <br />
                        o humano <span className="strikethrough">resiste ao</span> <span className="font-pecita">existe no</span> futuro.
                    </p>
                    <a href="#filtro-secao" className="loja-btn">Conheça a loja!</a>
                </div>
            </section>

            <main className="loja-content" id="loja-produtos-section">
                <div className="filtro-bar" id="filtro-secao">
                    <span className="filtro-label">Filtro:</span>
                    <DropdownFilter title="Faixa Etária" options={faixaEtariaOptions} />
                    <DropdownFilter title="Preço" options={precoOptions} />
                    <DropdownFilter title="Tipo" options={tipoOptions} />
                    <DropdownFilter title="Gênero" options={generoOptions} />
                </div>

                <div className="loja-produtos-card" style={{ backgroundImage: `url(${gridBackgroundImg})` }}>
                    <div className="product-grid">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`product-item-wrapper product-id-${product.id} ${product.isFeatured ? "featured" : ""} ${product.isLarge ? "large-item" : ""}`}
                            >
                                <div
                                    className="product-card"
                                    onClick={() => handleProductClick(product)}
                                    style={{
                                        backgroundColor: product.bgColor,
                                        cursor: product.isFeatured ? "default" : "pointer", // Muda o cursor para indicar que é clicável
                                    }}
                                >
                                    <img src={product.imageSrc} alt={product.name} className="product-image" />

                                    {product.isFeatured ? (
                                        <div className="featured-overlay">
                                            <div className="featured-text">
                                                <h3 className="featured-title">{product.name}</h3>
                                                <p className="featured-subtitle">{product.subtitle}</p>
                                            </div>
                                            <button
                                                className="featured-button"
                                                onClick={() => navigate("/info-produto", { state: { product } })}
                                            >
                                                Compre agora
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="price-tag">{product.price}</div>
                                    )}
                                </div>
                                {!product.isFeatured && (
                                    <p className="product-legend">{product.name}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <section className="plans-section">
                <div className="plans-cta">
                    <h2>Gostaria de receber uma caixa surpresa com produtos retrô todo mês na sua casa?</h2>
                    <a href="#plan-features-table" className="plans-button">Conheça nossos planos</a>
                </div>

                <div className="plans-card" style={{ backgroundImage: `url(${plansBackgroundImg})` }}>
                    <div className="plans-grid">
                        {/* Plan Headers */}
                        <div className="plan-header-item">
                            <div className="plan-image-card"><img src={caixaGrandeImg} alt="Caixa Aury Combo" /></div>
                            <h3 className="plan-title">Aury Combo</h3>
                            <p className="plan-price"><span className="price-small">R$</span>139,90<span className="price-small">/mês</span></p>
                        </div>
                        <div className="plan-header-item">
                            <div className="plan-image-card"><img src={caixaMediaImg} alt="Caixa Aury Box" /></div>
                            <h3 className="plan-title">Aury Box</h3>
                            <p className="plan-price"><span className="price-small">R$</span>99,90<span className="price-small">/mês</span></p>
                        </div>
                        <div className="plan-header-item">
                            <div className="plan-image-card"><img src={ticketImg} alt="Ticket Aury Pass" /></div>
                            <h3 className="plan-title">Aury Pass</h3>
                            <p className="plan-price"><span className="price-small">R$</span>59,90<span className="price-small">/mês</span></p>
                        </div>
                        
                        {/* Tabela de Features */}
                        <div className="plan-features-table" id="plan-features-table">
                            <div className="feature-row" style={{ backgroundColor: '#72678D' }}>
                                <div className="feature-title">kit mensal</div>
                                <div className="feature-value">box + pass</div>
                                <div className="feature-value">box</div>
                                <div className="feature-value">pass</div>
                            </div>
                            <div className="feature-row" style={{ backgroundColor: '#AAAAE7' }}>
                                <div className="feature-title">quantidade de produtos</div>
                                <div className="feature-value">até 9</div>
                                <div className="feature-value">até 6</div>
                                <div className="feature-value">--</div>
                            </div>
                            <div className="feature-row" style={{ backgroundColor: '#72678D' }}>
                                <div className="feature-title">valor em produtos</div>
                                <div className="feature-value">+R$380</div>
                                <div className="feature-value">+R$250</div>
                                <div className="feature-value">--</div>
                            </div>
                            <div className="feature-row" style={{ backgroundColor: '#AAAAE7' }}>
                                <div className="feature-title">frete grátis</div>
                                <div className="feature-value"><div className="checkmark-icon">✔</div></div>
                                <div className="feature-value"><div className="checkmark-icon">✔</div></div>
                                <div className="feature-value">50% de desconto</div>
                            </div>
                            <div className="feature-row" style={{ backgroundColor: '#72678D' }}>
                                <div className="feature-title">melhor preço do Brasil</div>
                                <div className="feature-value"><div className="checkmark-icon">✔</div></div>
                                <div className="feature-value"><div className="checkmark-icon">✔</div></div>
                                <div className="feature-value"><div className="checkmark-icon">✔</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}