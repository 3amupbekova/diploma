import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  onProductsLoad,
  onOrdersLoad,
} from "./firebase";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: {},

  // корзина
  cart: {},
  setCart: () => {},

  user: null, // здесь будет храниться информация про пользователя
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // useEffect(() => {
  //   onCategoriesLoad(setCategories);
  //   onProductsLoad(setProducts);
  //   onOrdersLoad(setOrders);

  //   onAuthChange((user) => {
  //     if (user) {
  //       user.isAdmin = user.email === "elana.zamirbekovaa@gmail.com";
  //     }
  //     setUser(user);
  //   });
  // }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/product/:path" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
