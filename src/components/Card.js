function Card({ img, header, description, link }) {
  return (
    <div className='card'>
      <img src={img} alt={header} className='pixel-corners' />
      <h3>{header}</h3>
      <p>{description}</p>
      <a href={link} target='_blank' rel='noreferrer'>
        Link to site
      </a>
    </div>
  );
}

export default Card;
