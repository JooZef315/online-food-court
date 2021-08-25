import React, { Component } from 'react';

const Item = (props) => {
  return ( 
    <div className='container row align-items-center'>
    <span className='col-3'>{props.product.name}: </span>
    <span className={props.product.count !== 0? "badge bg-primary col-1" : "badge bg-warning col-1"}>
    {props.product.count}
    </span>
    <button className=' btn m-2 btn-primary btn-sm col-1' onClick={props.onAdd}>+</button>
    {props.product.count <= 0?
            <button className='btn m-2 btn-danger btn-sm col-1' onClick={props.onSub} disabled> - </button>
            :
            <button className='btn m-2 btn-danger btn-sm col-1' onClick={props.onSub}> - </button>
    }
    <button className=' btn m-1 btn-lg fas fa-trash col-1' onClick={props.onRemove}></button>
  </div> 
   );
} 
export default Item;



// class Item extends Component {  
//   // state = { 
//   //    i : 6,   
//   // }
//   render() {     
//     return(
//       <div>
//         <span >{this.props.product.name}</span>
//         <span className={this.props.product.count !== 0? "badge bg-primary " : "badge bg-warning "}>
//         {this.props.product.count}
//         </span>
//         <button className=' btn m-1 btn-primary btn-sm' onClick={this.props.onAdd}>+</button>
//         <button className=' btn m-1 btn-danger fas fa-trash' onClick={this.props.onRemove}></button>
//         {this.props.product.count <= 0?
//                 <button className='btn m-1 btn-dark btn-sm' onClick={this.props.onSub} disabled> - </button>
//                 :
//               <button className='btn m-1 btn-dark btn-sm' onClick={this.props.onSub}> - </button>
//         }
//       </div>      
//     ) ;
//   }
// }
 
// export default Item;
