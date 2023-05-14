import { useState } from "react";
import Drawer from "../../Drawer/Drawer";
import NavToggle from "../../NavToggle/NavToggle";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="Layout">
      <header>
        <div className="head_bot">
          <Logo />
          <div className="search">
            <input type="text" />
            <button type="button">
              <img src="https://i.pinimg.com/564x/11/09/92/110992cd4635d5643ac7a688d68466f4.jpg" alt="" />
            </button>
          </div>
          <div className="head_auth">
            <CartLink />
            <Auth />
            <NavToggle callback={toggleDrawer}/>
            <Drawer open={drawerOpen}toggle={toggleDrawer}/>
          </div>
        </div>
        <div className="menu">
          <Nav />
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
