import "../CheckoutProduct/checkoutproduct.css";
import handbag from "../images/handbag.jpg";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src={handbag} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          Conkca London Alice Women's 33cm Biodegradable Leather
        </p>
        <p className="checkoutProduct_price">
          <small>£ </small>
          <strong>20</strong>
        </p>

        <div className="checkoutProduct_rating">⭐⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
