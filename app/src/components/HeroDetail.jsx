import screen from './../../public/screen.svg';
import cpu from './../../public/cpu.svg';
import cameraimg from './../../public/cameraimg.svg';
import Image from './Image';

const HeroDetail = ({ phone }) => {
  let pulgadas;
  let sistem;
  let camera;

  phone.forEach((elem) => {
    pulgadas = elem.pulgadas;
    sistem = elem.sistema;
    camera = elem.camara;
  });

  return (
    <figure className="hero_detail">
      <section className="sectionHero">
        <Image src={screen} alt="pantalla" />
        <div>
          <p>Pantalla</p>
          <p>{pulgadas}´</p>
        </div>
      </section>
      <section className="sectionHero">
        <Image src={cpu} alt="sistema" />
        <div>
          <p>Sistema</p>
          <p>{sistem}</p>
        </div>
      </section>
      <section className="sectionHero">
        <Image src={cameraimg} alt="camara" />
        <div>
          <p>Camara</p>
          <p>{camera}Mpx</p>
        </div>
      </section>
    </figure>
  );
};

export default HeroDetail;
