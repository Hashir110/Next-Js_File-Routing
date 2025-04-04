import Link from "next/link";
import React from "react";

function ProductOwner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-200 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {/* Owner Image */}
        <img
          src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/487077728_637255162547674_3514163630670339898_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4KVYoA_8VnTTZmighc0xJmgQRnO3NN2yaBBGc7c03bAzDHHDjmUKrzV1E2dodf37kYfac7OqXDbkrbgWyA2q1&_nc_ohc=_lTe_5avz_UQ7kNvwFCVPWG&_nc_oc=AdkFkkGvW0WslJ9PA1W0X7Rx42vwrs6RAgt9XKU2XFrRnpL9e_t42Ct_VROTMZJapiLyD0roCsbXAky-VudkZlUB&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=R46dFKMOZttgmJEOC0CL3w&oh=00_AYGQfceZ8T37e4Vto0-7oToscrBKVpL10Ki1fnQRHsuKig&oe=67F52CD5" // Replace with Muhammad Hashi's actual image URL
          alt="Muhammad Hashi"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        {/* Owner Name */}
        <h2 className="text-2xl font-semibold text-purple-700 mb-1">
          Muhammad Hashir Shaikh
        </h2>

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Product Owner👨‍💼
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6">Choose where to go:</p>

        {/* Links */}
        <div className="space-y-4">
          <Link
            className="block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            href="/productowner/productmanager"
          >
            Go to Product Manager
          </Link>

          <Link
            className="block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            href="/productowner/productemployee"
          >
            Go to Product Employee
          </Link>

          <Link
            className="block bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded transition duration-300 mt-6"
            href="/"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductOwner;
