import React, { Component } from "react";

const Item = (props) => {
  return (
    <div className="row align-items-center justify-content-center p-2 shadow-sm rounded">
      <span className="col-sm-3 text-center fs-5 fw-bold">
        {props.product.name}
      </span>
      <span className="col-sm-3 text-center p-1 fs-5">
        {props.product.count !== 0 &&
          props.product.price * props.product.count + "$"}
      </span>
      <span
        className={
          props.product.count !== 0
            ? "badge m-2 bg-primary p-3 col-6 col-sm-1"
            : "badge m-2 bg-warning p-3 col-6 col-sm-1"
        }
      >
        {props.product.count}
      </span>
      <button
        className="btn m-2 btn-primary btn-lg col-10 col-sm-1"
        onClick={props.onAdd}
      >
        {"+"}
      </button>
      {props.product.count <= 0 ? (
        <button
          className="btn m-2 btn-danger btn-lg col-10 col-sm-1"
          onClick={props.onSub}
          disabled
        >
          {"-"}
        </button>
      ) : (
        <button
          className="btn m-2 btn-lg btn-danger col-10 col-sm-1"
          onClick={props.onSub}
        >
          {"-"}
        </button>
      )}
      <button
        className=" btn m-1 btn-lg fas fa-trash col-10 col-sm-1"
        onClick={props.onRemove}
      ></button>
    </div>
  );
};
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
