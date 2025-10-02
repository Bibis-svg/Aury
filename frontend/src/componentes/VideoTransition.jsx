    import { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import '../styles/video-transition.css'; // Criaremos este CSS

    const VideoTransition = ({ targetPath }) => {
      const navigate = useNavigate();

      // Quando o vídeo terminar, navega para o destino
      const handleVideoEnd = () => {
        navigate(targetPath);
      };

      return (
        <div className="video-container">
          <video
            src="/intro.mp4"
            autoPlay
            muted // Essencial para autoplay na maioria dos navegadores
            onEnded={handleVideoEnd}
          />
        </div>
      );
    };

    export default VideoTransition;
    
