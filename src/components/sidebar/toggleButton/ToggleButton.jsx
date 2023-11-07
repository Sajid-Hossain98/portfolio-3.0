const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>Toggle button</button>
  );
};

export default ToggleButton;
