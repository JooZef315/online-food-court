import React from "react";

const Menu = ({ products, ToggleToCart }) => {
  return (
    <div className="container w-75">
      <h1>Menu</h1>
      <table className="table table-dark table-striped ">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}$</td>
                <td>
                  {p.inCart ? (
                    <i
                      className="fas fa-cart-plus "
                      onClick={() => ToggleToCart(p)}
                    ></i>
                  ) : (
                    <i
                      className="carted fas fa-cart-plus"
                      onClick={() => ToggleToCart(p)}
                    ></i>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
