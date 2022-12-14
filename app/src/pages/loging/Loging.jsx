import './loging.css';

import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (values) => {
    setUser(values.username);
    navigate('/carrito');
    localStorage.setItem('values', values);
  };

  const handleOnClick = () => {
    localStorage.removeItem('values');
    setUser('');
  };

  return (
    <div className="loging_form">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="username">User:</label>
        <input
          type="text"
          name="username"
          {...register('username', { required: true, minLength: 3 })}
        />
        {errors.username ? (
          <p className="error">Campo requerido, mínimo 3 caracteres</p>
        ) : null}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="ejem@gmail.com"
          {...register('email', {
            required: true,
            minLength: 6,
            validate: {
              format: (email) => {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  email,
                );
              },
            },
          })}
        />
        {errors.email ? (
          <p className="error">
            {errors.email.type === 'format'
              ? 'Email debe tener formato @email.com'
              : 'Campo requerido mínimo 6 caracteres'}
          </p>
        ) : null}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^\S*$/,
            validate: {
              format: (password) => {
                return (
                  /[A-Z]/g.test(password) &&
                  /[a-z]/g.test(password) &&
                  /[0-9]/g.test(password)
                );
              },
            },
          })}
        />
        {errors.password ? (
          <p className="error">
            {errors.password.type === 'format'
              ? 'La contraseña ha de tener una mayúscula, minúscula y números'
              : 'Este campo es requerido, mínimo 6 caracteres'}
          </p>
        ) : null}
        <label htmlFor="direction">Dirección:</label>
        <input
          type="text"
          name="direction"
          {...register('direction', { required: true, minLength: 5 })}
        />
        {errors.direction ? (
          <p className="error">Campo requerido, mínimo 5 caracteres</p>
        ) : null}
        <label htmlFor="phone">Teléfono contacto:</label>
        <input
          type="text"
          name="phone"
          {...register('phone', {
            required: true,
            minLength: 9,
            pattern: /^\S*$/,
            validate: {
              format: (phone) => {
                return /[0-9]/g.test(phone);
              },
            },
          })}
        />
        {errors.phone ? <p className="error">Campo requerido, solo números</p> : null}
        <button type="submit">Enviar</button>
      </form>
      <button type="button" onClick={handleOnClick}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Login;
