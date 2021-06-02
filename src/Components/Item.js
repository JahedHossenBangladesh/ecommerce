import React from 'react';

function Item({item}) {
    return (
      <div className='shadow p-3 md-5 bg-white rounded'>
        <h1>{item.imgName}</h1>
        <img src={item.img} alt="pic" className='img-fluid' />
        <h1>{item.price} tk</h1>
        <div className="btn btn-primary">
          Add Cart
        </div>
      </div>
    );
}

export default Item;