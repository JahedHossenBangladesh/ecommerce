import React, { useState } from 'react';
import Item from "./Item";
import {useSelector} from 'react-redux';
function Items(props) {
  const itemObj = useSelector((store) => store.itemsReducer);
  const [itemList,setItemList] = useState(itemObj.items);
  const [searchKey, setSearchKey] = useState("");


function filterItem() {
  const duplicatesList = itemObj.items;
  const filterList = duplicatesList.filter((item) =>
    item.imgName.toLowerCase().includes(searchKey.toLowerCase())
  );
  setItemList(filterList);
  
}


  const item= itemList.map((item) =>{
    return (
      <div className='col-md-4 mb-2'>
        <Item item={item} />
      </div>
    );
  })


    return (
      <div className="container">
   <input type="text" className="form-control mb-5" placeholder='Search the Product' value={searchKey} onChange={(e) => {setSearchKey(e.target.value)}} onKeyUp={filterItem}/>
        <div className="row">{item}</div>
      </div>
    );
}

export default Items;