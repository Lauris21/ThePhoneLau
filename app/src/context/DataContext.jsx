import { createContext, useEffect, useState } from 'react';

import getData from '../api/api';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const ordenDes = (a, b) => {
    if (a.precio < b.precio) {
      return 1;
    }
    if (a.precio > b.precio) {
      return -1;
    }
  };

  const [phones, setPhones] = useState([]);
  const [user, setUser] = useState('');
  const [phoneModelFilter, setPhoneModelFilter] = useState(phones);
  useEffect(() => {
    getData().then((res) => {
      res.sort(ordenDes);
      setPhones(res);
    });
  }, []);
  return (
    <DataContext.Provider
      value={{ phones, setPhones, user, setUser, phoneModelFilter, setPhoneModelFilter }}
    >
      {children}
    </DataContext.Provider>
  );
};
