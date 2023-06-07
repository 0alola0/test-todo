import React from 'react';

const Checkboxes = ({handleCheck, currentFilter}) => {
  return (
    <div>
    <label>
      <input
        type="checkbox"
        onChange={handleCheck}
        value="restaurant"
        checked={currentFilter.find((filter) => filter.value === "restaurant").checked}
        />
      Restaurant
    </label>
    <label>
      <input
        type="checkbox"
        value="bus"
        onChange={handleCheck}
        checked={currentFilter.find((filter) => filter.value === "bus").checked}
        />
      Bus
    </label>
    <label>
      <input
        type="checkbox"
        value="atm"
        onChange={handleCheck}
        checked={currentFilter.find((filter) => filter.value === "atm").checked}
        />
      ATM
    </label>
    <label>
      <input
        type="checkbox"
        value="park"
        onChange={handleCheck}
        checked={currentFilter.find((filter) => filter.value === "park").checked}
        />
      Park
    </label>
  </div>
  );
}

export default Checkboxes;
