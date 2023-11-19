import { Link } from 'react-router-dom';
import MuteButton from '../components/MuteButton';

function Home() {
  return (
    <>
      <h1>DANGER DEVELOPMENT</h1>
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
    </>
  );
}

export default Home;
