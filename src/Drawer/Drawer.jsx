
import Logo from "../components/Logo/Logo";
import Nav from "../components/Nav/Nav";
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}> 
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Logo />
        <Nav/>
      </div>
    </div>
  );
}

export default Drawer; 