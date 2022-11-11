import Image from './Image';
import trolley from './../../public/trolley.svg';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Header = () => {
  const { cesta } = useContext(DataContext);
  return (
    <>
      <header>
        <h1>ThePhoneFree</h1>
        <Image src={trolley} alt="trolley" />
        <p>{cesta}</p>
      </header>
    </>
  );
};

export default Header;
