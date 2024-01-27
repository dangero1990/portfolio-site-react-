import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import useTypewritter from '../hooks/useTypewriter';
import MuteButton from '../components/MuteButton';
import resume from '../assets/resume.pdf';

function About() {
  const [text, complete] = useTypewritter("Hi, I'm Andrew! I'm a front-end developer, gamer, and musician. I have a passion for creativity and problem solving. Development has been an exciting outlet for me to pursue both of these passions. Click on the word resume to download a copy of my resume, and view all of my qualifications: ", false);

  return (
    <section className='about nes-container is-dark with-title is-rounded'>
      <h2 className='title'>About Me</h2>
      <img src={profile} alt='profile' className='pixel-corners' />
      <div className='about-text'>
        <p>
          {text}
          {complete && (
            <span>
              <a id='resume' href={resume} download>
                Resume
              </a>
            </span>
          )}
        </p>
      </div>
      <MuteButton />
      {!complete && <span className='skip'>press any button to skip</span>}
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default About;

//test
