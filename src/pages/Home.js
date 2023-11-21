import { Link } from 'react-router-dom';
import MuteButton from '../components/MuteButton';

function Home() {
  return (
    <section className='nes-container is-dark with-title is-centered is-rounded'>
      <h1 className='title'>DANGER DEVELOPMENT</h1>
      <MuteButton />
      <ul>
        <li>
          <Link to={'/about'}>about</Link>
        </li>
        <li>
          <Link to={'/projects'}>projects</Link>
        </li>
        <li>
          <Link to={'/contact'}>contact me</Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
