import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Caminhos corrigidos para a pasta 'componentes'
import { CartProvider } from "./componentes/CartContext";
import { AudioProvider } from "./componentes/AudioContext";

import Cadastro from "./componentes/cadastro";
import Home from "./componentes/home";
import IntroJogo from "./componentes/introjogo";
import TelaInicial from "./componentes/tela-inicial";
import VideoTransition from "./componentes/VideoTransition";
import AudioCyber from "./componentes/AudioCyber";
import Loja from "./componentes/Loja";
import InfoProduto from "./componentes/info-produto";
import Sacola from "./componentes/sacola";
import TelaCompra from "./componentes/telaCompra";
import TelaFinalizada from "./componentes/telafinalizada";

function App() {
  return (
    // Envolve tudo com o CartProvider
    <CartProvider>
      <AudioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/tela-inicial" replace />} />
            <Route path="/tela-inicial" element={<TelaInicial />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/introjogo" element={<IntroJogo />} />
            <Route path="/transicao-video" element={<VideoTransition targetPath="/cadastro" />} />
            <Route path="/audiocyber-alert" element={<AudioCyber />} />
            <Route path="/info-produto" element={<InfoProduto />} />
            <Route path="/sacola" element={<Sacola />} />
            <Route path="/tela-compra" element={<TelaCompra />} />
            <Route path="/tela-finalizada" element={<TelaFinalizada />} />
          </Routes>
        </BrowserRouter>
      </AudioProvider>
    </CartProvider>
  );
}

export default App;