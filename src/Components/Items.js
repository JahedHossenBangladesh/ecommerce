import React from 'react';
import Item from "./Item";
import {useSelector} from 'react-redux';
function Items(props) {
  const itemObj = useSelector((store) => store.itemsReducer);
  const itemList = itemObj.items;
  const item= itemList.map((item) =>{
    return (
      <div className='col-md-4 mb-2'>
        <Item item={item} />
      </div>
    );
  })
    return (
      <div className="container">
        <h1>This is Items {itemList.length}</h1>
        <div className="row">{item}</div>
      </div>
    );
}

export default Items;