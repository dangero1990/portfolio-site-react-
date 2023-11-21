import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MuteButton from '../components/MuteButton';

function StartMenu() {
  const navigate = useNavigate();

  useEffect(() => {
    function goHome(e) {
      e.stopPropagation();
      const isInternalLink = e.target.tagName === 'a' || e.target.closest('a') || e.target.tagName === 'button' || e.target.closest('button');

      if (!isInternalLink) {
        navigate('/home');
      }
    }

    window.addEventListener('keydown', goHome);
    window.addEventListener('click', goHome);
    return () => {
      window.removeEventListener('keydown', goHome);
      window.removeEventListener('click', goHome);
    };
  }, [navigate]);

  return (
    <section className='start-menu'>
      <h1>DANGER DEVELOPMENT</h1>
      <MuteButton />
      <p className='start-text'>PRESS ANY BUTTON TO CONTINUE</p>
      <p className='skip'>For full experience turn audio on</p>
    </section>
  );
}

export default StartMenu;
