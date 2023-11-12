import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import useTypewritter from '../hooks/useTypewriter';

function About() {
  const text = useTypewritter("Hi, I'm Andrew! I'm a musician turned web developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni repudiandae, dolorem pariatur in doloribus sapiente nisi aperiam. Omnis ullam obcaecati neque cupiditate voluptatum iure, voluptatibus ipsam praesentium aperiam magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum deserunt voluptatem quod iste consectetur ab, numquam, cupiditate soluta, illum placeat magni. Quo hic ad suscipit officia quidem fugit ducimus!");

  return (
    <section className='about'>
      <h2>About Me</h2>
      <img src={profile} alt='profile picture' className='pixel-corners' />
      <p>{text}</p>
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default About;
