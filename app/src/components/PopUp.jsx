import React from 'react';
import { useNavigate } from 'react-router-dom';

import Popup from 'reactjs-popup';

const PopUp = () => {
  const navigate = useNavigate();
  return (
    <Popup
      trigger={<button className="button_add"> Añadir a la cesta</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                navigate('/');
                close();
              }}
            >
              Seguir comprando
            </button>
            <button
              className="button"
              onClick={() => {
                navigate('/carrito');
                close();
              }}
            >
              Pasar por caja
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PopUp;
