// Em: src/componentes/ModelViewer.jsx

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }) {
  const { scene } = useGLTF(url);
  
  // 1. AUMENTEI AINDA MAIS A ESCALA E AJUSTEI A POSIÇÃO
  return <primitive object={scene} scale={18} position={[0, -1.8, 0]} />;
}

export default function ModelViewer({ modelUrl, onClose }) {
  return (
    <div className="model-viewer-overlay" onClick={onClose}>
      <button className="close-button" onClick={onClose}>×</button>
      
      <div className="canvas-container" onClick={(e) => e.stopPropagation()}>
        {/* 2. APROXIMEI A CÂMERA */}
        <Canvas camera={{ position: [0, 0, 3.5], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          
          <Suspense fallback={
            <Html center>
              <div className="loading-text">Carregando...</div>
            </Html>
          }>
            <Model url={modelUrl} />
          </Suspense>
          
          <OrbitControls />
        </Canvas>
      </div>

      {/* 3. LEGENDA SIMPLIFICADA */}
      <div className="viewer-instructions">
        <p>Clique e arraste para girar • Role para dar zoom</p>
      </div>
    </div>
  );
}