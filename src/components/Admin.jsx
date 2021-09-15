import React from "react";
import { Link } from "react-router-dom";

const Admin = ({ products, onRemove, toEdit }) => {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <Link to="/Product/Add" className="btn btn-lg btn-primary mb-2">
        Add Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}$</td>
                <td>
                  <Link
                    to={`/Product/edit/${p.id}`}
                    className="fas fa-edit"
                    onClick={() => toEdit(p.id, p.name, p.price)}
                  ></Link>
                </td>
                <td>
                  <i className="fas fa-trash" onClick={() => onRemove(p)}></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
