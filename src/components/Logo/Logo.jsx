import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        {/* <a href="#" class="logo">
        
          Jewerly <span>.</span>
        </a> */}
        <img src="https://st2.depositphotos.com/24028908/44475/v/450/depositphotos_444751022-stock-illustration-line-art-diamond-jewelry-logo.jpg" alt="" />
      </NavLink>
    </div>
  );
}
