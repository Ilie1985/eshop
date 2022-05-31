import "../Checkout/checkout.css";
import checkoutImage from "../images/checkoutImage.jpg";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src={checkoutImage} alt="" className="checkout_ad" />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
