import { Link } from 'react-router-dom';

import Image from './Image';
import github from '../../public/github.png';
import linkedin from '../../public/linkedin-svgrepo-com.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li className="li1">
            <Link to="">Home</Link>
          </li>
          <li className="li2">
            <Link to="/loging">Loging</Link>
          </li>
          <li className="li3">
            <Link to="/carrito">Tu carrito</Link>
          </li>
        </ul>
        <div>
          <ul className="logos">
            <li>
              <a href="https://github.com/Lauris21">
                <Image src={github} alt="logo github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laura-sanchez-gonzalez0301/">
                <Image src={linkedin} alt="logo linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
