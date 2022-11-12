import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Pago = () => {
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    setEnd(true);
  };
  return (
    <div className="pago-form">
      <h2>Rellena los datos de tu tarjeta Visa y el pedido se pondrá en marcha</h2>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="tarjetuser">Nombre del titular:</label>
        <input
          type="texto"
          name="tarjetuser"
          {...register('tarjetuser', { required: true, minLength: 6 })}
        />
        {errors.tarjetuser ? <p className="error">Campo obligatorio</p> : null}
        <label htmlFor="tarjetnumber">Número de tarjeta</label>
        <input
          type="number"
          name="tarjetnumber"
          {...register('tarjetnumber', { required: true, minLength: 16 })}
        />
        {errors.tarjetnumber ? <p className="error">Campo obligatorio</p> : null}
        <label htmlFor="cvvtarjet">CVV:</label>
        <input
          type="number"
          name="cvvtarjet"
          {...register('cvvtarjet', { required: true, minLength: 3, maxLength: 3 })}
        />
        <label htmlFor="expiration">Fecha de expiración</label>
        <select name="expiration">
          <option value="">Mes</option>
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
        <select name="expiration">
          <option value="13">2022</option>
          <option value="14">2023</option>
          <option value="15">2024</option>
          <option value="16">2025</option>
          <option value="17">2026</option>
        </select>
        <button className="button_end" type="submit">
          Confirmar compra
        </button>
      </form>
      <div className={end && 'div_end'}>
        <p>Gracias por su compra, que lo disfrute! 💖</p>
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Pago;
