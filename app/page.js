"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to{" "}
          <span className="text-blue-600">File Base Routing In NextJs</span>
        </h1>
        <div className="space-y-4">
          <Link
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            href="/productList"
          >
            Go to Product List
          </Link>
          <Link
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            href="/productowner"
          >
            Go to Product Owner
          </Link>
        </div>
      </div>
    </main>
  );
}
