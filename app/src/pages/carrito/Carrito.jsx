import './carrito.css';

import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

import Image from '../../components/Image';
import Fecha from '../../components/Fecha';
import trash from '../../../public/trash-svgrepo-com.svg';

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
      <div className="all_carrito">
        <div className="phones_carrito">
          {phonecesta ? (
            phonecesta.map((item, i) => (
              <figure key={i} className={`figure_cesta${i}`}>
                <Image src={item.image.negro.front} alt={item.modelo} />
                <section className="section_carrito">
                  <p>{item.modelo}</p>
                  <div>
                    <p>Entrega estimada</p>
                    <Fecha />
                  </div>
                </section>
                <section className="price_carrito">
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
        </div>
        <section className="resumen">
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
            <p className="total">{total}€</p>
          </div>
          <button onClick={handleOnClick} type="button">
            Realizar pedido
          </button>
        </section>
      </div>
    </div>
  );
};

export default Carrito;
