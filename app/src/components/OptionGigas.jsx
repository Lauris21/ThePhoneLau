import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const OptionGigas = () => {
  const { phones } = useContext(DataContext);

  const orden = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  };

  const gigas = [];
  const mapeoGigas = phones.map((item) => item.gigas);
  mapeoGigas.forEach((element) => {
    if (!gigas.includes(element)) {
      gigas.push(element);
    }
    return gigas.sort(orden);
  });
  const optionGigas = [];
  gigas.forEach((item) => {
    optionGigas.push(
      <option key={item} value={item}>
        {item}
      </option>,
    );
  });

  return optionGigas;
};

export default OptionGigas;
