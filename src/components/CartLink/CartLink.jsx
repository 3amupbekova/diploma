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
        <img src="https://i.pinimg.com/564x/14/64/53/146453abcd0d77e10444895668151bd0.jpg" alt="" />({total})
      </Link>
    </div>
  );
}