import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">О себе</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Доставка</NavLink>
        </li>
        <li>
          <NavLink to="payment">Оплата</NavLink>
        </li>
      </ul>
    </nav>
  );
}
