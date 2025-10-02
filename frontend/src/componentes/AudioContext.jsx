    import React, { createContext, useContext, useRef, useCallback } from 'react';

    const AudioContext = createContext();

    export const useAudio = () => useContext(AudioContext);

    export const AudioProvider = ({ children }) => {
      const audioRef = useRef(null);

      // Função para tocar um áudio. Para qualquer áudio anterior.
      const playAudio = useCallback((src, loop = false) => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        audioRef.current = new Audio(src);
        audioRef.current.loop = loop;
        audioRef.current.play().catch(error => console.error("Erro ao tocar áudio:", error));
      }, []);

      // Função para parar o áudio
      const stopAudio = useCallback(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      }, []);

      const value = { playAudio, stopAudio };

      return (
        <AudioContext.Provider value={value}>
          {children}
        </AudioContext.Provider>
      );
    };
    
    export default AudioContext;