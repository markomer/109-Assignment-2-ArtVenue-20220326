import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-page">

      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Art Venue</h1>
          <h4>Your Artwork Hub</h4>
        </div>
        <img src="/imgs/gallery1.jpg" alt="Art Gallery" />
      </div>

      <div className="info-banner">
        <h4 className="items-list">ART PRINTS / T-SHIRTS / STICKERS / HOODIES / ORIGINAL ART</h4>
        <Link to="/catalog" className="btn btn-info">Check out our awesome catalog!</Link>
      </div>

    </div>
  );
};

export default Home;