import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <a href="#" class="logo">
        
       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kp.ru%2Fwoman%2Fmoda%2Fluchshie-yuvelirnye-brendy%2F&psig=AOvVaw30DIdGsBmMpghRAp9j5I5t&ust=1709825838149000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCx2N_734QDFQAAAAAdAAAAABAK" alt="logo1" />
        </a>
      </NavLink>
    </div>
  );
}
