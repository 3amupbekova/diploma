import "./CartLink.css";

import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <img
          src="https://st.depositphotos.com/57803962/56461/v/450/depositphotos_564611376-stock-illustration-shopping-cart-icon-thin-line.jpg"
          alt=""
        />
        ({total})
      </Link>
    </div>
  );
}
