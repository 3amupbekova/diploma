import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      Guest <button onClick={logIn}>
        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/log_in_icon_128822.png" alt="" />
      </button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <Link to="/orders"> {user.displayName}</Link>
        <button onClick={logOut}><img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/exit_icon_125291.png" alt="" /></button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
