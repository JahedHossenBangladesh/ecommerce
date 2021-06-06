import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
   const cartObj = useSelector(store => store.cartReducer);
   const dispatch = useDispatch();




   const tablebody = cartObj.cart.map((item) =>{
     return <tr>
       <td>{item.imgName}</td>
       <td>{item.price}</td>
       <td><button className="btn-danger" onClick={() => {dispatch({ type: "DELETE", payload: item });}}>Delete</button></td>
     </tr>
   })
    return (
      <div className="row justify-content-center">
        <table className="table table-dark col-md-8 mt-5">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tablebody}</tbody>
        </table>
      </div>
    );
}

export default Cart;