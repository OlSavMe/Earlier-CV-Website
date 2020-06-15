const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px #040404",
    color: state.isSelected ? "#83b0d8" : "#040404",
    padding: 10,
    fontSize: "1.2rem",
    backgroundColor: state.isSelected ? "#e4e5e7" : "white",
  }),
  control: (base, state) => ({
    ...base,
    fontSize: "1.2rem",
    background: "white",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "#49494b" : "#040404",
    boxShadow: state.isFocused ? "#dfd8c8" : "#040404",
    "&:hover": {
      borderColor: state.isFocused ? "#49494b" : "#040404",
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: 3,
  }),
};

export default selectStyles;
