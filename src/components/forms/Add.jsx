import React, { useState } from "react";
import { validate } from "./validation";

const Add = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState({
    nameErrMes: null,
    priceErrMes: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nameErrMes, priceErrMes } = validate(name, price);
    if (!nameErrMes && !priceErrMes) {
      let newProduct = {
        name: name,
        price: parseInt(price),
        count: 0,
        inCart: false,
      };
      props.onAdd(newProduct);
    } else {
      setErrors({ nameErrMes, priceErrMes });
    }
  };
  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {errors.nameErrMes && (
          <div className="alert alert-danger">{errors.nameErrMes}</div>
        )}
        <div className="mb-3 mt-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="number"
            min="1"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.priceErrMes && (
            <div className="alert alert-danger">{errors.priceErrMes}</div>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
    </div>
  );
};

export default Add;
