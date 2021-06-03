import React from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {
   const itemObj = useSelector(store => store.cartReducer);
    return (
      <div className='row justify-content-center'>
        <table className="table table-dark col-md-8 mt-5">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <h1>the length:{itemObj.cart.length}</h1>
      </div>
    );
}

export default Cart;