import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrCoatCheck } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase.js";
import User from "./User.jsx";

export default function Navbar() {
  const [user, setUser] = useState();

  // 사용자 정보가 남아있다면 로그인 유지
  useEffect(() =>{
    onUserStateChange(user => {
      console.log(user)
      setUser(user);
    });
  }, [])

  // const loginHandler = () => {
  //   login().then((user) => setUser(user));
  // };

  // const logoutHandler = () => {
  //   logout().then((user) => setUser(user));
  // };

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to="/" className="flex items-center text-4xl text-brand gap-2">
        <GrCoatCheck className="text-red" />
        <p>Today's Fit</p>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products/new">
          <BsPencilSquare className="text-2xl" />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
