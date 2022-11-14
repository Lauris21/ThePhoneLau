import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';

import Image from './../Image';
import trolley from './../../../public/trolley.svg';
import userImg from './../../../public/user-svgrepo-com.svg';

import './header.css';

const Header = () => {
  const { cesta, user } = useContext(DataContext);

  return (
    <>
      <header>
        <Link to="/">
          <h1>ThePhoneFree</h1>
        </Link>
        {user !== '' && <p>{user}</p>}
        <Link to="/loging">
          <Image src={userImg} alt="usuario" />
        </Link>
        <Link to="/carrito" className="trolley">
          <p>{cesta}</p>
          <Image src={trolley} alt="trolley" />
        </Link>
      </header>
    </>
  );
};

export default Header;
