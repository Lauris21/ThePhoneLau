import BeatLoader from 'react-spinners/BeatLoader';

const Spinner = () => {
  return (
    <div className="loading">
      <BeatLoader color="rgba(54, 215, 183, 1)" cssOverride={{}} margin={0} />
    </div>
  );
};

export default Spinner;
