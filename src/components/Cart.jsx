import React, { useEffect, useState } from "react";
import Item from "./Item";

const Cart = ({
  products,
  HandleAdd,
  HandleRemove,
  HandleSub,
  HandleReset,
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.price * product.count;
    });
    setTotal(sum);
  }, [products]);

  return (
    <div className="row align-items-center justify-content-center col-md-9 col-lg-6 p-3 m-auto">
      {products.length === 0 && <h1 className="h1">No products!</h1>}
      {products.map((prod) => {
        return (
          <Item
            key={prod.id}
            product={prod}
            onAdd={() => HandleAdd(prod)}
            onSub={() => HandleSub(prod)}
            onRemove={() => HandleRemove(prod)}
          />
        );
      })}
      {products.length > 0 && (
        <>
          <button
            className="btn m-2 btn-secondary col-6 col-sm-2"
            onClick={HandleReset}
          >
            Reset
          </button>
          <span className="text-center fw-bold fs-4 m-2 col-6 col-sm-9">
            Total: {total}$
          </span>
        </>
      )}
    </div>
  );
};

export default Cart;

// class Cart extends Component {
//     state = {
//         products: [
//             { id: 1, name: "Burger", count: 12 },
//             { id: 2, name: "Fries", count: 5 },
//             { id: 3, name: "Cola", count: 3 },
//           ],
//      }

//     HandleReset = () => {
//         let Rproducts = [...this.state.products];
//         Rproducts = Rproducts.map((r) => {
//             r = {...r};
//             r.count = 0;
//             return r;
//             //return {...r,count:0};
//         });
//         console.log(Rproducts);
//         console.log(this.state.products);
//         this.setState({products:Rproducts});
//     }

//     HandleAdd = (prod) => {
//          //console.log('add');
//          let AddProducts = [...this.state.products];
//          //console.log(AddProducts);
//          //let p = AddProducts.find((p) => p.id === prod.id);
//          //p.count++;
//          let p = AddProducts.findIndex((p) => p.id === prod.id);
//          AddProducts[p] = {...AddProducts[p]}
//          AddProducts[p].count++;
//          console.log(p);
//          this.setState({products:AddProducts});
//     }

//     HandleSub = (prod) => {
//         let SubProducts = [...this.state.products];
//         //let p = SubProducts.find((p) => p.id === prod.id);
//         //p.count--;
//         //p.count > 0? p.count--: p.count=0;
//         let p = SubProducts.findIndex((p) => p.id === prod.id);
//         SubProducts[p] = {...SubProducts[p]}
//         SubProducts[p].count--;
//         console.log(p);
//         this.setState({products:SubProducts});
//     }

//     HandleRemove = (prod) => {
//         let products = [...this.state.products];
//         let p = products.findIndex((p) => p.id === prod.id);
//         console.log(p);
//         products.splice(p,1);
//         this.setState({products});
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.products.length === 0 && <h1>No products</h1>}

//                 {this.state.products.map((prod) => {
//                     return (
//                         <Item
//                         key={prod.id}
//                         product={prod}
//                         onAdd={() => this.HandleAdd(prod)}
//                         onSub={() => this.HandleSub(prod)}
//                         onRemove={() => this.HandleRemove(prod)}
//                         />
//                     )
//                 })}
//                 <button className='btn m-2 btn-secondary' onClick={this.HandleReset}>Reset</button>
//             </div>
//              );
//     }
// }

// export default Cart;
