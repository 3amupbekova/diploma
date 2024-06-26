import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <a href="#" class="logo">
        
          Jewerly  <span>.</span>
        </a>
      </NavLink>
    </div>
  );
}
