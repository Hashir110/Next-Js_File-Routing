import Link from "next/link";
import React from "react";

function ProductEmployee() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-200 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {/* Profile Image */}
        <img
          src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/433622633_439582841903516_227098357644259467_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEYLgShtmq0f-EOV43wO1Dm7aHl2H3w0SXtoeXYffDRJTpg5BJ0ghKG2p_BwVNaO0kIW_3sZXaQfzgDZngbEhSQ&_nc_ohc=hqPMd5PSc1AQ7kNvwE7MB_1&_nc_oc=AdmNb2AF97hIa1CRg-ItsM7WEjBxCtQ-nqy69wXHJ1HfbbdRbiFUWEVol89XGkMiEvhe6lbbByFsnS_jBxydZFAL&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=SDXwShKxHAuuZm-4wdzjNw&oh=00_AYHGLU2doyOmY8bjjMg-RAfmvOgPUItzbysqYMqUkVpGdA&oe=67F52F3D" // Replace this with Ahsan's actual image URL
          alt="Ahsan Ali"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          👷‍♂️ Product Employee
        </h2>

        {/* Name */}
        <p className="text-xl text-blue-600 font-semibold mb-4">Ahsan Ali</p>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Welcome to the Product Employee Page.
        </p>

        {/* Button */}
        <Link
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
          href="/"
        >
          ⬅ Go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default ProductEmployee;
