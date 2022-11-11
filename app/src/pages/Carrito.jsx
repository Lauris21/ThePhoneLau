import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

import Image from '../components/Image';
import Fecha from '../components/Fecha';
import trash from '../../public/trash-svgrepo-com.svg';

const Carrito = () => {
  const { phonecesta, total, cesta, user } = useContext(DataContext);

  const navigate = useNavigate();

  const handleOnClick = () => {
    if (user === '') {
      navigate('/loging');
    } else {
      navigate('/pago');
    }
  };

  return (
    <div className="carrito">
      <h2>Tu carrito</h2>
      {phonecesta ? (
        phonecesta.map((item, i) => (
          <figure key={i} className={`figure_cesta${i}`}>
            <Image src={item.image.negro.front} alt={item.modelo} />
            <section>
              <p>{item.modelo}</p>
              <div>
                <p>Entrega estimada</p>
                <Fecha />
              </div>
            </section>
            <section>
              <p className="carrito_precio">{item.precio}€</p>
              <button>
                <Image className="trash" src={trash} alt="basura" />
              </button>
            </section>
          </figure>
        ))
      ) : (
        <p>Not Found</p>
      )}
      <section>
        <h3>Resumen de compra</h3>
        <div>
          <section>
            <p>{cesta} artículos</p>
            <p>Gastos de envío</p>
          </section>
          <section>
            <p>{total}€</p>
            <p>Gratis</p>
          </section>
        </div>
        <div>
          <p>Total a pagar</p>
          <p>{total}€</p>
        </div>
        <button onClick={handleOnClick} type="button">
          Realizar pedido
        </button>
      </section>
    </div>
  );
};

export default Carrito;
