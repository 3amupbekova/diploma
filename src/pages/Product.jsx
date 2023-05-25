import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <div className="Disk">
        <h1>{product.name}</h1>
        <img src={product.picture} alt={product.name} />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium laborum dolorum explicabo sit laudantium alias velit necessitatibus illum id cum.
        </p>
        <span>{product.price} som</span>
        <div className="Kor">
      
        <AddToCart product={product} /> 
        </div>
      </div>
      </div>
  )
}
