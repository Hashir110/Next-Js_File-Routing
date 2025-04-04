"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Product List
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <Link
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center"
            href="/"
          >
            Go to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <Link
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition duration-300 text-center"
                  href={`/productList/${item.id}`}
                >
                  Go to Product Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
