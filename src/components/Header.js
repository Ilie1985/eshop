import "../App.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";

//divide the header in 3(logo,searchbar,nav)
//divide nav in 3 (item)
//bring in basket and store icon from material UI

const appHeader = () => {
  return (
    <div className="App">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle">eShop</h2>
      </div>
      <div className="header_searchBar"></div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineOne">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineOne">Shop</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon />
          <span className="nav_itemLineOne">0</span>
        </div>
      </div>
    </div>
  );
};

export default appHeader;
