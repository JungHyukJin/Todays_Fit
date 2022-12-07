import React from "react";
import { Link } from "react-router-dom";
import { GrCoatCheck } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to="/" className='flex items-center text-4xl text-brand gap-2'>
        <GrCoatCheck className='text-red'/>
        <p>Today's Fit</p>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products/new">
          <BsPencilSquare className='text-2xl'/>
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
