import Logo from "../components/Logo/Logo";
import Nav from "../components/Nav/Nav";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  let menuBtn = document.querySelectorAll('.Nav a')
let menu = document.querySelector('.Drawer')
menuBtn.forEach(el => {
    el.addEventListener('click', function(){
        menu.classList.remove('open')
    })
})

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
      <div className="Logo-Nav">
        <Logo />
        <Nav />
      </div>
      </div>
    </div>
  );
}

export default Drawer;
