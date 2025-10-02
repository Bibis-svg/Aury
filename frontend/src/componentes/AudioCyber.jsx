    import { useEffect } from 'react';
    import { useAudio } from './AudioContext';
    import '../styles/audiocyber.css';

    const AudioCyber = () => {
      const { playAudio, stopAudio } = useAudio();

      useEffect(() => {
        // Toca o som de alerta
        playAudio('/alert.mp3');
        
        // Exibe o alerta do sistema
        const timer = setTimeout(() => {
          alert("O FUTURO DA HUMANIDADE FOI COMPROMETIDO");
        }, 500);

        // Limpa tudo quando o componente é desmontado
        return () => {
          stopAudio();
          clearTimeout(timer);
        };
      }, [playAudio, stopAudio]);

      return (
        <div className="audiocyber-container">
          <h1 className="glitch-text" data-text="FALHA NO SISTEMA">FALHA NO SISTEMA</h1>
        </div>
      );
    };

    export default AudioCyber;
    
