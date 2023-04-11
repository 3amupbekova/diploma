import { useEffect, useState } from "react";
import "./CategoryList.css";

export default function CategoryList() {
  сonst[categories, setCategories] = useState([]);

  useEffect

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul></ul>
    </div>
  );
}
