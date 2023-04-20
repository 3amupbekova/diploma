import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productCollection } from "./firebase";
import Payment from "./pages/Payment";
import Reviews from "./pages/Reviews";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const AppContext = createContext({
  categories: [],
  products: [],

  cart: {},
  setCart: () => {},
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = [];

      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });

      setCategories(newCategories);
    });

    getDocs(productCollection).then((snapshot) => {
      const newProducts = [];

      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });

      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
