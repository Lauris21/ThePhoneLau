import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const OptionGigas = () => {
  const { phones } = useContext(DataContext);

  const gigas = [];
  const mapeoGigas = phones.map((item) => item.gigas);
  mapeoGigas.forEach((element) => {
    if (!gigas.includes(element)) {
      gigas.push(element);
    }
    return gigas;
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
