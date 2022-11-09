import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const OptionMarcas = () => {
  const { phones } = useContext(DataContext);

  const marcas = [];
  const mapeoMarcas = phones.map((item) => item.marca);
  mapeoMarcas.forEach((element) => {
    if (!marcas.includes(element)) {
      marcas.push(element);
    }
    return marcas;
  });
  const optionMarcas = [];
  marcas.forEach((item) => {
    optionMarcas.push(
      <option key={item} value={item}>
        {item}
      </option>,
    );
  });

  return optionMarcas;
};

export default OptionMarcas;
