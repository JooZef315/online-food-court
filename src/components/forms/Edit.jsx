import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { validate } from "./validation";

const Edit = (props) => {
  const [name, setName] = useState(props.product.name);
  const [price, setPrice] = useState(props.product.price);
  const id = useParams().id;

  const [errors, setErrors] = useState({
    nameErrMes: null,
    priceErrMes: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nameErrMes, priceErrMes } = validate(name, price);
    if (!nameErrMes && !priceErrMes) {
      props.toEdit(parseInt(id), name, parseInt(price));
      props.onEdit(parseInt(id));
    } else {
      setErrors({ nameErrMes, priceErrMes });
    }
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
          {errors.nameErrMes && (
            <div className="alert alert-danger">{errors.nameErrMes}</div>
          )}
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
          {errors.priceErrMes && (
            <div className="alert alert-danger">{errors.priceErrMes}</div>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Edit" />
      </form>
    </div>
  );
};

export default Edit;
