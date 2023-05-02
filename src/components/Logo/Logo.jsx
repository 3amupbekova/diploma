import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
       <img src="https://st4.depositphotos.com/3328119/24427/v/450/depositphotos_244270958-stock-illustration-logo-of-the-flower-shop.jpg" />
        
      </NavLink>
    </div>
  );
}
