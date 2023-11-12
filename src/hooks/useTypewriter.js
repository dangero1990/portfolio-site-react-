import { useState, useEffect } from 'react';

function useTypewritter(text) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setCurrentText(text);
      setCurrentIndex(text.length);
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
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

  return currentText;
}

export default useTypewritter;
