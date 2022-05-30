import "../Home/home.css";
import trolley from "../images/trolley.jpg";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src={trolley} alt="" className="home_image" />
          <div className="home_row">
            <Product />
            <Product />
          </div>

          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home_row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
