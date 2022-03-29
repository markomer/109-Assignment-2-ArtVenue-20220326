import './quantityPicker.css';
import {useState} from 'react';

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    let value = quantity;
    if(quantity>1)
      value = value-1;
    console.log("It Decreased!");
    setQuantity(value);
    props.onChange(value);
  }

  const handleIncrease = () => {
    let value = quantity+1;

    
    console.log("It Increased!");
    setQuantity(value);
    props.onChange(value);
  }

  return (<div className='quantityPicker'>
            <button className='btn btn-info btn-sm' onClick={handleDecrease}>-</button>
            <label className='quantityLabel'> {quantity} </label>
            <button className='btn btn-info btn-sm' onClick={handleIncrease}>+</button>
          </div>);
};

export default QuantityPicker;