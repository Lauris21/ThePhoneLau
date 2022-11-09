import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../context/DataContext';
import Image from './../components/Image';
import OptionMarcas from '../components/OptionMarcas';
import OptionGigas from '../components/OptionGigas';

const Home = () => {
  const { phones, phoneModelFilter, setPhoneModelFilter } = useContext(DataContext);
  const [filter, setFilter] = useState('');
  const [marca, setMarca] = useState([]);
  const [giga, setGiga] = useState([]);

  useEffect(() => {
    setPhoneModelFilter(
      phones.filter((item) => item.modelo.toLowerCase().includes(filter.toLowerCase())),
    );
  }, [filter]);
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
        <select onChange={(ev) => setMarca(ev.target.value)}>
          <option value="">Marca</option>
          {<OptionMarcas />}
        </select>
        <select onChange={(ev) => setGiga(ev.target.value)}>
          <option value="">Gigas</option>
          {<OptionGigas />}
        </select>
      </div>
      <div className="phonesGallery">
        {filter === ''
          ? phones.map((item) => (
              <figure key={item.id} className="figureGallery">
                <Image src={item.image.negro.front} alt={item.modelo} />
                <h3>{item.modelo}</h3>
              </figure>
            ))
          : phoneModelFilter.map((item) => (
              <figure key={item.id} className="figureGallery">
                <Image src={item.image.negro.front} alt={item.modelo} />
                <h3>{item.modelo}</h3>
              </figure>
            ))}
      </div>
    </>
  );
};

export default Home;
