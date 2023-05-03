import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
       <img src="https://document-export.canva.com/Simeo/DAFh2ySimeo/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230502%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230502T210030Z&X-Amz-Expires=58439&X-Amz-Signature=fdefc894264f85fc0b9619fb38ec2c6421052b35c0a6bbcedf672949bd102d89&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2003%20May%202023%2013%3A14%3A29%20GMT" />
        
      </NavLink>
    </div>
  );
}
