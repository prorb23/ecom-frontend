import React from "react";
import ProductCard from "./ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";

const Products = () => {
  const isLoading = false;
  const errorMessage = "Error while Loading this";
  const products = [
    {
      productId: 1,
      productName: "Product 1",
      price: 29.99,
      image: "https://placehold.co/600x400",
      description: "High quality product",
      quantity: 50,
      discount: 10,
      specialPrice: 26.99,
    },
    {
      productId: 2,
      productName: "Product 2",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Premium quality product",
      quantity: 30,
      discount: 15,
      specialPrice: 42.49,
    },
    {
      productId: 3,
      productName: "Product 3",
      price: 39.99,
      image: "https://placehold.co/600x400",
      description: "Best selling product",
      quantity: 75,
      discount: 5,
      specialPrice: 37.99,
    },
  ];
  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      {isLoading ? (
         <p>it is loading</p>
      ) : errorMessage ? (
        <div className="flex justify-center items-center h-50">
          <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
          <span className="text-slate-800 text-lg font-medium">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="min-h-175">
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products && 
            products.map((item, i) => <ProductCard key={i} {...item} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
