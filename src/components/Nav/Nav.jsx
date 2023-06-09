import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <li>
          <NavLink to="payment">Payment</NavLink>
        </li>
      </ul>
    </nav>
  );
}
