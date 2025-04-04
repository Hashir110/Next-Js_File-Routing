import Link from 'next/link';
import React from 'react'

function ProductAbout() {
  return (
    <div>
      <p className='text-3xl'>i am product about</p>
      <Link className="text-blue-500" href="/productList/productdetails">
        Go to product details
      </Link>
      <br />
      <Link className="text-blue-500" href="/">
        Go to home
      </Link>
    </div>
  );
}

export default ProductAbout;