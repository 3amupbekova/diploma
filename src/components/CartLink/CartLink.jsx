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
        <img src="https://i.pinimg.com/564x/9a/0f/97/9a0f97efb79c5c2ca85a6c5e0e7f9b28.jpg" alt="" />({total})
      </Link>
    </div>
  );
}