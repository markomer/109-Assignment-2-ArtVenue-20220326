import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {

  const [quantity, setQuantity] = useState(1);
  
  const onQuantityChange = (value) =>{
    console.log("Quantitiy Changed to:", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  }

  const getPrice = () => {
    let price = props.data.price;
    return "$" + price.toFixed(2);
  }

  return (<div className='product'>
            <h5>These are our amazing products!</h5>
            <img src={"/imgs/"+props.data.image} alt="product iamge"></img>
            <h2> {props.data.title} </h2>
            <label className='price'> {getPrice()} </label>
            <label className='total'> Total: {getTotal()}</label>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className='addBtn'>Add</button>
          </div>);
};


export default Product;