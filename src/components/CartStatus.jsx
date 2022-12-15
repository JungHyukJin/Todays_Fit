import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const {
    user: { uid },
  } = useAuthContext();
  const { data: products } = useQuery(["cart"], () => getCart(uid));


  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl"/>
      {products && <p className="absolute -top-1 -right-2 text-white font-bold text-center w-6 h-6 rounded-full bg-brand">{products.length}</p>}
    </div>
  );
}
