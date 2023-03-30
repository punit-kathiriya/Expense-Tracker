import React from 'react';

export const Cars = () => {
  return (
    <>
      <div>
        <h1>Cars</h1>
        <h4>Car 1</h4>
        <h4>Car 2</h4>
        <h4>Car 3</h4>
        <form>
          <input type="text" className="Input" placeholder="Write you car name" required/> <br></br>
          <input type="checkbox" required></input>
          <label> Is your car electric?</label><br></br>
          <button type='submit'>Add car +</button>
        </form>
      </div>     
    </>
  );
};

export default Cars;