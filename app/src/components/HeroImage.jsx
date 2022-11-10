import { useEffect, useState } from 'react';
import Image from './Image';

const HeroImage = ({ phone }) => {
  let model;
  let price;
  let gigs;
  let blackFront;
  let blackBack;
  let blueFront;
  let blueBack;

  phone.forEach((elem) => {
    model = elem.modelo;
    price = elem.precio;
    gigs = elem.gigas;
    blackFront = elem.image.negro.front;
    blackBack = elem.image.negro.back;
    blueFront = elem.image.azul.front;
    blueBack = elem.image.azul.back;
  });
  const [mainImg, setMainImg] = useState('');
  const [img2, setImg2] = useState('');
  useEffect(() => {
    setMainImg(blackFront);
    setImg2(blackBack);
  }, []);

  return (
    <div className="hero_image">
      <figure className="figure_phone">
        <Image src={mainImg} alt={model} />
        <div className="img_second">
          <Image src={mainImg} alt={model} />
          <Image src={img2} alt={model} />
        </div>
      </figure>
      <section className="sectionImage">
        <h2>{model}</h2>
        <p className="price">{price}€</p>
        <p>{gigs} Gb</p>
        <p>Color</p>
      </section>
    </div>
  );
};

export default HeroImage;
