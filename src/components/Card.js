function Card({ img, header, description, link }) {
  function goToLink() {
    window.open(link, '_blank');
  }

  return (
    <div className='card nes-pointer' onClick={goToLink}>
      <img src={img} alt={header} className='pixel-corners' />
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
