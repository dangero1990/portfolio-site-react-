import { useState, useEffect } from 'react';

function useTypewritter(text, status) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [complete, setComplete] = useState(status);

  useEffect(() => {
    if (clicked) {
      setCurrentText(text);
      setCurrentIndex(text.length);
    }
    if (currentIndex < text.length) {
      const beep = require('../assets/beep.mp3');
      const audio = new Audio(beep);
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        audio.play();
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [clicked, currentIndex, text]);

  useEffect(() => {
    function click(e) {
      const isInternalLink = e.target.tagName === 'a' || e.target.closest('a');

      if (!isInternalLink) {
        setClicked(true);
      }
    }

    window.addEventListener('click', click);
    window.addEventListener('keydown', click);

    return () => {
      window.removeEventListener('click', click);
      window.removeEventListener('keydown', click);
    };
  }, []);

  useEffect(() => {
    if (currentIndex === text.length) {
      setComplete(true);
    }
  }, [text.length, currentIndex]);

  return [currentText, complete];
}

export default useTypewritter;
