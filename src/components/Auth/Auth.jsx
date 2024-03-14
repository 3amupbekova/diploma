// import { useContext } from "react";
// import "./Auth.css";
// import { AppContext } from "../../App";
// import { logIn, logOut } from "../../firebase";
// import { Link } from "react-router-dom";

// export default function Auth() {
//   const { user } = useContext(AppContext);

//   // показывается гостю
//   let output = (
//     <span>
//       {" "}
//       <button onClick={logIn}>
//         <img
//           src="https://i.pinimg.com/564x/cc/73/c9/cc73c94058157f9dc5d1be2bdd4704b2.jpg"
//           alt=""
//         />
//       </button>
//     </span>
//   );
//   // показывается пользователю
//   if (user) {
//     output = (
//       <span>
//         <Link to="/orders"> {user.displayName}</Link>
//         <button onClick={logOut}>
//           <img
//             src="https://i.pinimg.com/564x/cc/73/c9/cc73c94058157f9dc5d1be2bdd4704b2.jpg"
//             alt=""
//           />
//         </button>
//       </span>
//     );
//   }

//   return <div className="Auth">{output}</div>;
// }
