import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  // получить продукты и содердижимое корзины
  const { products, cart, setCart } = useContext(AppContext);

  function onQtyChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onRemoveClick(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);
  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem">
        <img src={product.picture} alt={product.name} />

        <div className="Block">
        <Link to={"/product/" + product.slug}>{product.name}</Link>
        <input
          type="number"
          min={1}
          onChange={(event) => onQtyChange(product, +event.target.value)}
          value={cart[product.id]}
        />
        <span>{product.price * cart[product.id]} сом</span>
        <button onClick={() => onRemoveClick(product)}>
          {" "}
          <img
            src="https://st.depositphotos.com/57803962/56463/v/450/depositphotos_564632676-stock-illustration-trash-bin-icon-vector-illustration.jpg"
            alt=""
          />
        </button>
      </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
