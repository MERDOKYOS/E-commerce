import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShowContext";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className=" hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-2 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;
