import axios from 'axios';

const getData = async () => {
  try {
    const data = await axios.get('https://phone-7fb6.onrender.com/phones');
    return data.data;
  } catch (error) {
    return error;
  }
};

export default getData;
