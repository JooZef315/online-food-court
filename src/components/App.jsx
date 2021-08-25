import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

import Admin from "./Admin";
import Cart from "./Cart";
import Add from "./forms/Add";
import Edit from "./forms/Edit";
import Home from "./Home";
import Menu from "./Menu";
import Navbar from "./Navbar";

const App = () => {
  // const [products, setProducts] = useState([
  //     { id: 1, name: "Burger", count: 12 },
  //     { id: 2, name: "Fries", count: 5 },
  //     { id: 3, name: "Cola", count: 3 },
  //   ])

  const [products, setProducts] = useState([]);

  //for text inputs
  const [productToEdit, setProductToEdit] = useState({
    id: 0,
    name: "",
    price: 0,
    count: 0,
    inCart: false,
  });

  useEffect(() => {
    let prdcts = fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const AddProduct = (Product) => {
    axios.post("http://localhost:3000/products", Product).then((res) => {
      console.log(res.data);
      console.log(Product);
      let Nproducts = [...products];
      Nproducts.push(res.data);
      setProducts(Nproducts);

      location.replace("/Menu");
    });
  };

  //to display the value in text inputs / to update FE
  const SetProductToEdit = (id, name, price) => {
    productToEdit.id = id;
    productToEdit.name = name;
    productToEdit.price = price;
    console.log(productToEdit);

    // NproductToEdit.id = id;
    // NproductToEdit.name = name;
    // NproductToEdit.price = price;
    // setProductToEdit(NproductToEdit);
    // console.log(NproductToEdit);
    // console.log(productToEdit);
  };
  //to ubdate BE
  const EditProduct = (id) => {
    axios
      .put(`http://localhost:3000/products/${id}`, productToEdit)
      .then((res) => {
        let Nproducts = [...products];
        let p = Nproducts.findIndex((p) => p.id === id);
        Nproducts[p] = { ...productToEdit };
        setProducts(Nproducts);

        location.replace("/Menu");
      });
  };

  const HandleRemove = (Product) => {
    axios.delete(`http://localhost:3000/products/${Product.id}`).then((res) => {
      let Rproducts = [...products];
      let p = Rproducts.findIndex((p) => p.id === Product.id);
      Rproducts.splice(p, 1);
      setProducts(Rproducts);

      location.replace("/Menu");
    });
  };

  const HandleReset = () => {
    let Rproducts = [...products];
    Rproducts = Rproducts.map((r) => {
      r = { ...r };
      r.count = 0;
      return r;
      //return {...r,count:0};
    });
    setProducts(Rproducts);
  };

  const ToggleToCart = (prod) => {
    let cproducts = [...products];
    let product = cproducts.findIndex((p) => p.id === prod.id);
    cproducts[product] = { ...cproducts[product] };
    cproducts[product].inCart = !cproducts[product].inCart;
    setProducts(cproducts);
  };

  const HandleAdd = (prod) => {
    //console.log('add');
    let AddProducts = [...products];
    //console.log(AddProducts);
    //let p = AddProducts.find((p) => p.id === prod.id);
    //p.count++;
    let p = AddProducts.findIndex((p) => p.id === prod.id);
    AddProducts[p] = { ...AddProducts[p] };
    AddProducts[p].count++;
    console.log(p);
    setProducts(AddProducts);
  };

  const HandleSub = (prod) => {
    let SubProducts = [...products];
    //let p = SubProducts.find((p) => p.id === prod.id);
    //p.count--;
    //p.count > 0? p.count--: p.count=0;
    let p = SubProducts.findIndex((p) => p.id === prod.id);
    SubProducts[p] = { ...SubProducts[p] };
    SubProducts[p].count--;
    console.log(p);
    setProducts(SubProducts);
  };

  return (
    <>
      <Navbar count={products.filter((p) => p.inCart).length} />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/Menu">
          <Menu products={products} ToggleToCart={ToggleToCart} />
        </Route>
        <Route path="/cart">
          <Cart
            products={products.filter((p) => p.inCart)}
            HandleReset={HandleReset}
            HandleAdd={HandleAdd}
            HandleSub={HandleSub}
            HandleRemove={ToggleToCart}
          />
        </Route>
        <Route path="/Admin">
          <Admin
            products={products}
            onRemove={HandleRemove}
            toEdit={SetProductToEdit}
          />
        </Route>
        <Route path="/Product/Add">
          <Add onAdd={AddProduct} />
        </Route>
        <Route path="/Product/Edit/:id">
          <Edit
            product={productToEdit}
            toEdit={SetProductToEdit}
            onEdit={EditProduct}
          />
        </Route>
        <Redirect to="/Home" />
      </Switch>
    </>
  );
};

export default App;

// class App extends Component {
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
//         //console.log(Rproducts);
//         //console.log(this.state.products);
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
//             <>
//             <Navbar count = {this.state.products.length}/>

//             <Route path='/cart'>
//             <Cart
//             products={this.state.products}
//             HandleReset={this.HandleReset}
//             HandleAdd={this.HandleAdd}
//             HandleSub={this.HandleSub}
//             HandleRemove={this.HandleRemove}/>
//             </Route>
//             {/* <Route path='/'>
//                 <Home />
//             </Route>             */}
//             <Route path='/Home'>
//                 <Home />
//             </Route>
//             <Route path='/About'>
//                 <About />
//             </Route>
//             </>
//          );
//     }
// }

// export default App;
