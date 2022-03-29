/**create a component (Admin)
register the url   /Admin
register a menu item for item

Form: title image price category buttontosave buttontoclear**/

import "./admin.css";
import {useState} from 'react';
import DataService from "../services/dataService";



const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon,setCoupon] = useState({});

  const handleInputChange = (e) => {
    var copy = { ...prod};
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };

  const [change, setChange] = useState({});

  const handleCCChange = (e) => {
    var copy = { ...coupon};
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log(prod);
 
    let service = new DataService();
    service.saveProduct(prod);
  };

  const saveCoupon = () => {
    console.log(coupon);

    let service = new DataService();
    service.saveCouponCode(coupon);
  }

  return (
     <div className="admin">
      <section>
        <h3>Register New Product</h3>

        <div className="form">
          <div className="my-control">
            <label>Title:</label>
            <input onChange={handleInputChange} name="title" type="text"></input>
          </div>

          <div className="my-control">
            <label>Image:</label>
            <input onChange={handleInputChange} name="image" type="text"></input>
          </div>

          <div className="my-control">
            <label>Category:</label>
            <input onChange={handleInputChange} name="category" type="text"></input>
          </div>

          <div className="my-control">
            <label>Price</label>
            <input onChange={handleInputChange} name="price" type="text"></input>
          </div>

          <div className="my-control">
            <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>


          </div>
        </div>
      </section>

      <section>
        <h3>Coupon Codes</h3>

        <div className="form">

          <div className="my-control" >
            <label>Code:</label>
            <input onChange={handleCCChange} name="code" type="text" />
          </div>

            <div className="my-control" >
            <label>Discount:</label>
            <input onChange={handleCCChange} name="discount" type="text" />
          </div>

          <div className="my-control">
            <button onClick={saveCoupon } className="btn btn-dark">Save Coupon Code</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Admin;
