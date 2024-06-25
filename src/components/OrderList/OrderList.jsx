import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "Нету страницы с этим продуктом";
  }

  const output = orders.map((order) => {
    const cart = Object.keys(order.cart).map((productId) => {
      const product = products.find((product) => product.id === productId);
      if (!product) {
        return "Продукт не найден";
      }

      return (
        <div>
          {product.name}: {order.cart[product.id]} X {product.price} сом ={" "}
          {order.cart[product.id] * product.price} сом
        </div>
      );
    });

    return (
      <div className="Order">
        <div>Имя: {order.name}</div>
        <div>Номер: {order.phone}</div>
        <div>Адрес: {order.address}</div>
        <div>Карточка: {cart}</div>
      </div>
    );
  });

  return <div className="OrderList">{output}</div>;
}
