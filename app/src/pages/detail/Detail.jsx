import './detail.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import HeroImage from '../../components/HeroImage';
import HeroDetail from '../../components/HeroDetail';

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
      <h1>Detail phone</h1>
      <div className="detail">
        <HeroImage phone={phone} />
        <HeroDetail phone={phone} />
        <button onClick={handleOnClick}>Back</button>
      </div>
    </>
  );
};

export default Detail;
