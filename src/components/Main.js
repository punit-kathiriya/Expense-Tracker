import React from 'react';

export const Main = () => {
  return (
    <>
      <h1>Header</h1>
      <h4>Your Balance</h4>
      <h4>0.00€</h4>
      <div>
        <form>
          <input type="number" className="Input" name="price" min="1" max="5" placeholder="0.00 €" required/> <br></br>
          <label>Which car?</label><br></br>
          <select name="cars" id="cars">
            <option value="">Choose your car!</option>
            <option value="car1">Car 1</option>
            <option value="car2">Car 2</option>
            <option value="car3">Car 3</option>
          </select><br></br>
          <button type='submit'>Count €</button>
        </form>
      </div>
    </>
  );
};

export default Main;