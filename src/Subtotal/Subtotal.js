import "../Subtotal/subtotal.css";
import CurrencyFormat from "react-currency-format";

//currencyFormat has predefined atributes that i can use

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items): <strong>£0</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
    </div>
  );
};

export default Subtotal;
