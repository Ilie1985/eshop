import "../Home/home.css";
import trolley from "../images/trolley.jpg";
import Product from "../Product/Product";
import handbag from "../images/handbag.jpg";
import hat from "../images/hat.jpg";
import iphone from "../images/iphone.jpg";
import laptop from "../images/laptop.jpg";
import plates from "../images/plates.jpg";
import violin from "../images/violin.jpg";



const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src={trolley} alt="" className="home_image" />
          <div className="home_row">
            <Product
              id="1"
              title="Conkca London Alice Women's 33cm Biodegradable Leather"
              price={30.0}
              rating={5}
              image={handbag}
            />
            <Product
              id="2"
              title="Men's Fashion Classic Cap Black-Grey"
              price={6.0}
              rating={4}
              image={hat}
            />
          </div>

          <div className="home_row">
            <Product
              id="3"
              title="Apple iPhone 8, 64GB, Space Grey (Renewed)"
              price={300.0}
              rating={4}
              image={iphone}
            />
            <Product
              id="4"
              title="HP 15.6 Laptop PC, Intel i5, 8GB RAM, 512GB SSD, FHD, Natural silver"
              price={500.0}
              rating={5}
              image={laptop}
            />
            <Product
              id="5"
              title="Coza Design- Unbreakable and Reusable  Plate Set- BPA Free- Set of 6 (Black)"
              price={18.0}
              rating={5}
              image={plates}
            />
          </div>

          <div className="home_row">
            <Product
              id="6"
              title="Forenza F1151CBK Uno Series 3/4 Size Black Violin Outfit"
              price={350.0}
              rating={5}
              image={violin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
