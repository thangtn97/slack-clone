import React from "react";

const AddChanel: React.FC = () => {
  return (
    <form>
      <label>Chanel name:</label>
      <input type="text" placeholder="Enter your chanel"></input>
      <button>Add</button>
      <button>Cancel</button>
    </form>
  );
};

export default AddChanel;
