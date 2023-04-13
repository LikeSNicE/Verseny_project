const SwitchTabStyles = ({ isActive }) => {
  return {
    backgroundColor: isActive ? "rgba(217, 217, 217, 0.5)" : null,
    borderRadius: isActive ? "15px" : null,
  };
};


export default SwitchTabStyles;