import React, { Component } from 'react';
import Item from './Item';

const Cart = ({products, HandleAdd, HandleRemove, HandleSub, HandleReset}) => {    
    return ( 
        <div className='container float-start'>
        {products.length === 0 && <h1>No products</h1>}
        {products.map((prod) => {
            return (
                <Item 
                key={prod.id} 
                product={prod} 
                onAdd={() => HandleAdd(prod)}
                onSub={() => HandleSub(prod)}
                onRemove={() => HandleRemove(prod)}
                /> 
            )
        })} 
        <button className='btn m-2 btn-secondary' onClick={HandleReset}>Reset</button>
        </div> 
     );
}
 
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