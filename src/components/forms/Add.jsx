import React, { useState } from "react";

const Add = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    let newProduct = {
      name: name,
      price: parseInt(price),
      count: 0,
      inCart: false,
    };
    props.onAdd(newProduct);
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        <div className="mb-3">
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
        </div>
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
    </div>
  );
};

export default Add;
