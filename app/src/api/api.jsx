import axios from 'axios';

const getData = async () => {
  try {
    const data = await axios.get('http://localhost:8080/phones');
    return data.data;
  } catch (error) {
    return error;
  }
};

export default getData;
