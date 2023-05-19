import { useState } from "react";
import Drawer from "../../Drawer/Drawer";
import NavToggle from "../../NavToggle/NavToggle";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Footer from "../Footer/Footer";
import AddProduct from "../../AddProduct/AddProduct";

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
          <div className="head_auth">
            <Auth />
            <CartLink />
            <NavToggle callback={toggleDrawer} />
            <Drawer open={drawerOpen} toggle={toggleDrawer} />
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
