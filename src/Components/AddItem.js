import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem(props) {
  const [productName,setProudctName] = useState('');
  const [productPrice,setProductPrice] = useState('');
  const [productPhoto,setProductPhoto] = useState('');

const dispatch= useDispatch()
function addProduct(){
  let product={
  imgName: productName,
  price:  productPrice,
  img: productPhoto
  }
  dispatch({ type: "Add_Product", payload: product });
}

    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mt-2 "
            placeholder="Add The Product Name"
            value={productName}
            onChange={(e) => {
              setProudctName(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control mt-2 "
            placeholder="Add The Product Price"
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control mt-2 "
            placeholder="Add The Product Photo"
            value={productPhoto}
            onChange={(e) => {
              setProductPhoto(e.target.value);
            }}
          />
          <button className="btn btn-primary mt-2 float-md-left" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>
    );
}

export default AddItem;