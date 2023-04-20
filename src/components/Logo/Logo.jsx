import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <h1>Million petals</h1>
      <img src="https://i.pinimg.com/564x/8d/e3/51/8de351871b989c08e107d0054fb4bfee.jpg" />
      </NavLink>
    </div>
  );
}
