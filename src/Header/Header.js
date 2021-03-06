import "../Header/header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
//divide the header in 3(logo,searchbar,nav)
//divide nav in 3 (item)
//bring in basket and store icon from material UI
//create an input type text with a className
//bring in search incon  from material ui for search bar

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>
      {/* ==============================================================*/}

      <div className="header_searchBar">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      {/*==================================================================  */}

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <span className=" nav_itemLineTwo nav_basketCount">0</span>
          </div>
        </Link>
      </div>
      {/* =========================================================== */}
    </div>
  );
};

export default Header;
