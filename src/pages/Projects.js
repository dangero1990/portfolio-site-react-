import { Link } from 'react-router-dom';
import useTypewritter from '../hooks/useTypewriter';
import Card from '../components/Card';
import solver from '../assets/solvher.png';
import ageCalc from '../assets/ageCalc.png';
import flixx from '../assets/flixx.png';
import MuteButton from '../components/MuteButton';

function Projects() {
  const [text, complete] = useTypewritter('Here are a few projects I have worked on', false);
  return (
    <section>
      <h2>Projects</h2>
      <p>{text}</p>
      <MuteButton />
      <div className='card-grid'>
        <Card img={solver} header='solvher' description='a web app for cycle counting' link='http://solvher.net' />
        <Card img={ageCalc} header='age calculator' description='a web app built to calculate age down to the day' link='https://timely-dusk-9b848e.netlify.app/' />
        <Card img={flixx} header='flixx' description='a website for finding out information about your favorite movie or tv shows' link='https://aesthetic-dodol-1da2e6.netlify.app/' />
      </div>
      {!complete && <span className='skip'>press any button to skip</span>}
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default Projects;
