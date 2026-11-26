import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  console.log("Product ID:", productId);
  return <div></div>;
}

export default Product;
