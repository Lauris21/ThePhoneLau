import { createContext, useEffect, useState } from 'react';

import getData from '../api/api';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [user, setUser] = useState('');
  const [phoneModelFilter, setPhoneModelFilter] = useState([]);
  useEffect(() => {
    getData().then((res) => setPhones(res));
  }, []);
  return (
    <DataContext.Provider
      value={{ phones, setPhones, user, setUser, phoneModelFilter, setPhoneModelFilter }}
    >
      {children}
    </DataContext.Provider>
  );
};
