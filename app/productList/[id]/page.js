"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {product.title}
        </h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <p className="text-gray-600 mb-2">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <Link
          href="/productList"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          ⬅ Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
