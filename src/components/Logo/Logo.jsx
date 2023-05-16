import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
       <img src="https://i.pinimg.com/564x/8e/b7/fe/8eb7fe34f14d7c361e8339ea2e409e8b.jpg" />

      
        
      </NavLink>
    </div>
  );
}
