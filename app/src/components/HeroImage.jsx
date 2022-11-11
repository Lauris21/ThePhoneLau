import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Image from './Image';

const HeroImage = ({ phone }) => {
  const [addCesta, setAddCesta] = useState(0);
  const { cesta, setCesta, total, setTotal, phonecesta, setphoneCesta } =
    useContext(DataContext);
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
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  useEffect(() => {
    setMainImg(blackFront);
    setImg1(blackFront);
    setImg2(blackBack);
  }, []);

  const handleBlack = () => {
    setMainImg(blackFront);
    setImg1(blackFront);
    setImg2(blackBack);
  };

  const handleBlue = () => {
    setMainImg(blueFront);
    setImg1(blueFront);
    setImg2(blueBack);
  };

  const handleChangeImg = () => {
    setMainImg(img1);
  };
  const handleChangeImg1 = () => {
    setMainImg(img2);
  };

  const handleCesta = (ev) => {
    ev.preventDefault();
    setCesta(cesta + addCesta);
    setTotal(total + price);
    phonecesta.push(phone);
    setphoneCesta(phonecesta.flat());
  };
  console.log(phonecesta);
  return (
    <div className="hero_image">
      <figure className="figure_phone">
        <Image src={mainImg} alt={model} />
        <div className="img_second">
          <button onClick={handleChangeImg}>
            <Image src={img1} alt={model} />
          </button>
          <button onClick={handleChangeImg1}>
            <Image src={img2} alt={model} />
          </button>
        </div>
      </figure>
      <section className="section_image">
        <h2>{model}</h2>
        <p className="price">{price}€</p>
        <p>{gigs} Gb</p>
        <p>Color</p>
        <div>
          <button className="black" onClick={handleBlack}></button>
          <button className="blue" onClick={handleBlue}></button>
        </div>
        <form onSubmit={handleCesta} className="shop">
          <input
            type="number"
            name="shop"
            min="1"
            onChange={(ev) => setAddCesta(Number(ev.target.value))}
          />
          <p>Envío gratis en 24 horas.</p>
          <button type="submit">Añadir al carrito</button>
        </form>
      </section>
    </div>
  );
};

export default HeroImage;
