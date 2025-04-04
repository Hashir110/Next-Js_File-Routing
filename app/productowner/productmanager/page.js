import Link from "next/link";
import React from "react";

function ProductManager() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-200 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {/* Profile Image */}
        <img
          src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/476949995_936501288596439_4567859275563667735_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFrDxuS7bodwwvpwg9trCCiwjDXfLdaCxvCMNd8t1oLG8axW83fSGtxPFpdAoCBCEB2F2FW5GqwMu7_uHE4xvRL&_nc_ohc=_g01f4vhMTsQ7kNvwFhsjMj&_nc_oc=AdkT9QZ5LmWxEIZ68o0xEceev7EDv9ebcMiFiVRiV1VIpbBPX3vbiztVpKm1i1-ZTA0w1Z8xmyDtATrGVS9W1VQs&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=SevAnVOIGkAwhZdU_d9GNg&oh=00_AYGNKEh5qfxuhfzmFREFpNIly8iSDs7fn1psn3QXo668nA&oe=67F55161" // Replace with Murtaza Baloch's image URL
          alt="Murtaza Baloch"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        {/* Manager Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🧑‍💼 Product Manager
        </h2>

        {/* Name */}
        <p className="text-xl text-orange-600 font-semibold mb-4">
          Murtaza Shaikh
        </p>

        {/* Welcome Message */}
        <p className="text-gray-600 mb-6">
          Welcome! I’m responsible for overseeing the product strategy and team
          execution.
        </p>

        {/* Go to Home Button */}
        <Link
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
          href="/"
        >
          ⬅ Go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default ProductManager;
