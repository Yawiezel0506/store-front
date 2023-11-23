import React from "react";
import ProductDetails, { Product } from "./image";

const productData: Product = {
  id: 1,
  title: "Infinix INBOOK",
  image: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  price: 1099,
  description:
    "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  category: "laptops",
  clickCount: 4.54,
  quantity: 96,
  attributes: [
    {
      key: "Processor",
      value: "Intel Core i3",
    },
    {
      key: "RAM",
      value: "8GB",
    },
    {
      key: "Storage",
      value: "256GB SSD",
    },
    {
      key: "Warranty",
      value: "1 Year",
    },
  ],
};

const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductDetails product={productData} />
    </div>
  );
};

export default ProductPage;
