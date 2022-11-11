import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import Image from '../components/Image';
import Fecha from '../components/Fecha';
import trash from '../../public/trash-svgrepo-com.svg';

const Carrito = () => {
  const { phonecesta } = useContext(DataContext);
  console.log(phonecesta);
  return (
    <div className="carrito">
      <h2>Tu carrito</h2>
      {phonecesta ? (
        phonecesta.map((item, i) => (
          <figure key={i} className={`figure_cesta${i}`}>
            <Image src={item.image.negro.front} alt={item.modelo} />
            <section>
              <h4>{item.modelo}</h4>
              <div>
                <p>Entrega estimada</p>
                <Fecha />
              </div>
            </section>
            <section>
              <p>{item.precio}€</p>
              <button>
                <Image src={trash} alt="basura" />
              </button>
            </section>
          </figure>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default Carrito;
