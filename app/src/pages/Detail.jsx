import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import HeroImage from '../components/HeroImage';
import HeroDetail from '../components/HeroDetail';

const Detail = () => {
  const { phones } = useContext(DataContext);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const handleOnClick = (e) => {
    navigate('/');
  };

  const phone = phones.filter((item) => item.id == id);
  return (
    <>
      <h1>Detail</h1>
      <button onClick={handleOnClick}>Back</button>
      <div className="detail">
        <HeroImage phone={phone} />
        <HeroDetail phone={phone} />
      </div>
    </>
  );
};

export default Detail;
