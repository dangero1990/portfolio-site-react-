import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function StartMenu() {
  const navigate = useNavigate();

  useEffect(() => {
    function goHome() {
      navigate('/home');
    }

    window.addEventListener('keydown', goHome);
    window.addEventListener('click', goHome);
    return () => {
      window.removeEventListener('keydown', goHome);
      window.removeEventListener('click', goHome);
    };
  }, [navigate]);

  return (
    <>
      <h1>DANGER DEVELOPMENT</h1>
      <p className='start-text'>PRESS ANY BUTTON TO CONTINUE</p>
    </>
  );
}

export default StartMenu;
