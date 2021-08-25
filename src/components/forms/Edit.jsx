import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  const [name, setName] = useState(props.product.name);
  const [price, setPrice] = useState(props.product.price);
  const id = useParams().id;

  const handleSubmit = (event) => {
    props.toEdit(parseInt(id), name, parseInt(price));
    props.onEdit(parseInt(id));
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Edit</h1>
      <h3>Product id: {props.product.id}</h3>
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
        <input type="submit" className="btn btn-primary" value="Edit" />
      </form>
    </div>
  );
};

export default Edit;
