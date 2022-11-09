import Image from './Image';
import trolley from './../../public/trolley.svg';

const Header = () => {
  return (
    <>
      <header>
        <h1>ThePhoneFree</h1>
        <Image src={trolley} alt="trolley" />
      </header>
    </>
  );
};

export default Header;
