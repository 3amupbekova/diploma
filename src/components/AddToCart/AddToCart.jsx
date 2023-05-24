import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  const currentCount = cart[product.id] ? cart[product.id] : 0;
  function onAddToCart() {
    setCart({
      ...cart,
      [product.id]: currentCount + 1,
    });
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCart}>
        {" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhyAwwvTdKrBmujD2icCdtRXDqMyHkrGf8RmjFGe9VlWUSAGA5Fg631N9FCgaDSC1OaU&usqp=CAU"
          alt=""
        />
        ({currentCount})
      </button>
    </div>
  );
}
