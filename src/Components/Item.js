import React from 'react';
import { useDispatch } from 'react-redux';

function Item({item}) {
            const dispatch = useDispatch()
    return (
      <div className='shadow p-3 md-5 bg-white rounded'>
        <h1>{item.imgName}</h1>
        <img src={item.img} alt="pic" className='img-fluid' />
        <h1>{item.price} tk</h1>
        <div className="btn btn-primary" onClick={() => dispatch({type:'ADD_CART',payload:item})}>
          Add Cart
        </div>
      </div>
    );
}

export default Item;