import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import { useState, useEffect } from 'react';

const Catalog = () => {
    // to read   // to modify
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    console.log("Data Retrieved");
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
  };

  useEffect( () => {
    loadCatalog();
  } );

  
  return (<div className='catalog'>
            <h1>Check out our amazing catalog of art products!</h1>
            <h2>We have {products.length} different products!!</h2>
            {
              products.map(  //use key property, below, with map
                (prod) => (<Product key={prod._id}
                data={prod}

                />)
              )
            }
          </div>);
};


export default Catalog;