import React from "react";

export default function ProductCard({
  product: { id, title, imageUrl, price, category },
}) {
  return (
    <li>
      <img className="w-96" src={imageUrl} alt={title} />
      <div>
        <p>{title}</p>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}
