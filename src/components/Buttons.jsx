import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </>
  );
};

export default Buttons;
