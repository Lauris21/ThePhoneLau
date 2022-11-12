import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataContext';
import Image from './../components/Image';
import OptionMarcas from '../components/OptionMarcas';
import OptionGigas from '../components/OptionGigas';
import OptionPrecio from './../components/OptionPrecio';
import Spinner from '../components/Spinner';

const Home = () => {
  const { phones, phoneModelFilter, setPhoneModelFilter } = useContext(DataContext);
  const [filter, setFilter] = useState('');
  const [marca, setMarca] = useState('');
  const [gigas, setGigas] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setPhoneModelFilter(
      phones.filter((item) => item.modelo.toLowerCase().includes(filter.toLowerCase())),
    );
  }, [filter]);

  const getMarcaPhone = (ev) => {
    setMarca(ev.target.value);
    setPhoneModelFilter(phones.filter((item) => item.marca.includes(ev.target.value)));
  };

  const getGigaPhone = (ev) => {
    setGigas(ev.target.value);
    if (ev.target.value != '') {
      setPhoneModelFilter(phones.filter((item) => item.gigas == ev.target.value));
    } else {
      setPhoneModelFilter(phones);
    }
  };

  const ordenDes = (a, b) => {
    if (a.precio < b.precio) {
      return 1;
    }
    if (a.precio > b.precio) {
      return -1;
    }
  };

  const ordenAsce = (a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
  };
  const getOrden = (ev) => {
    if (ev.target.value === 'descendente') {
      setPhoneModelFilter(phones.sort(ordenDes));
    } else if (ev.target.value === 'ascendente') {
      setPhoneModelFilter(phones.sort(ordenAsce));
    }
  };

  return (
    <>
      <h1>Home</h1>
      <section>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={(ev) => setFilter(ev.target.value)}
        />
      </section>
      <div>
        <select onChange={(ev) => getMarcaPhone(ev)}>
          <option value="">Marca</option>
          {<OptionMarcas />}
        </select>
        <select onChange={(ev) => getGigaPhone(ev)}>
          <option value="">Gigas</option>
          {<OptionGigas />}
        </select>
        <select onChange={(ev) => getOrden(ev)}>
          <OptionPrecio />
        </select>
      </div>
      <div className="phones_gallery">
        {loading ? (
          <Spinner />
        ) : filter === '' && marca === '' && gigas === 0 ? (
          phones.map((item) => (
            <figure key={item.id} className="figureGallery">
              <Link to={`/${item.id}`}>
                <Image src={item.image.negro.front} alt={item.modelo} />
                <h3>{item.modelo}</h3>
              </Link>
            </figure>
          ))
        ) : (
          phoneModelFilter.map((item) => (
            <figure key={item.id} className="figureGallery">
              <Link to={`/${item.id}`}>
                <Image src={item.image.negro.front} alt={item.modelo} />
                <h3>{item.modelo}</h3>
              </Link>
            </figure>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
