const Fecha = () => {
  const fecha = new Date();
  const day = fecha.getDate() + 1;
  const month = fecha.getMonth() + 1;
  const year = fecha.getFullYear();

  const entrega = `${day}/${month}/${year}`;
  return <p>{entrega}</p>;
};

export default Fecha;
