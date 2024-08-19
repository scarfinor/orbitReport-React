import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  {
    displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      );
    });
    return (
      <>
        <button onClick={() => setSat(sat)} key={id}>
          {sat} Orbit
        </button>
        <button onClick={() => displaySats(sat)} key={id}>
          {sat}Orbit
        </button>
        <button onClick={() => setSat(setSat)}>All Orbits</button>
      </>
    );
  }
};

export default Buttons;
