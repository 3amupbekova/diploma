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
      Guest{" "}
      <button onClick={logIn}>
        <img
          src="https://avatars.mds.yandex.net/i?id=0a07125b1707daca2291f4970d23fbdf6ec13c84-9181971-images-thumbs&n=13"
          alt=""
        />
      </button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <Link to="/orders"> {user.displayName}</Link>
        <button onClick={logOut}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0a07125b1707daca2291f4970d23fbdf6ec13c84-9181971-images-thumbs&n=13"
            alt=""
          />
        </button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
